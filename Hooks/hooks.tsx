import { gql, useMutation, useQuery } from "@apollo/client";
import { BlobServiceClient, ContainerClient } from "@azure/storage-blob";

import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DebounceExecuteProps, SearchWordProps } from "../Types/type";
export const useUploadArticle = () => {
    const uploadDocument = gql`
        mutation uploadArticle(
            $title: String!
            $caption: String!
            $authorId: String!
            $createdAt: timestamp!
            $githubUrl: String!
            $fileId: String!
        ) {
            insertArticle(
                objects: {
                    title: $title
                    caption: $caption
                    authorId: $authorId
                    createdAt: $createdAt
                    githubUrl: $githubUrl
                    fileId: $fileId
                }
            ) {
                returning {
                    id
                }
            }
        }
    `;
    const [uploadArticle, { loading }] = useMutation(uploadDocument);
    return { uploadArticle, loading };
};

export const useAuthentication = () => {
    const firebaseConfig = {
        apiKey: process.env.NEXT_PUBLIC_APIKEY,
        authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
        databaseURL: process.env.NEXT_PUBLIC_DATABASEURL,
        projectId: process.env.NEXT_PUBLIC_PROJECTID,
        storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_MESSAGEINGSENDERID,
        appId: process.env.NEXT_PUBLIC_APPID,
        measurementId: process.env.NEXT_PUBLIC_MEASUREMENTID,
    };
    const [idToken, setIdToken] = useState("");

    const app = initializeApp(firebaseConfig);
    const { setLocalStorage } = useLocalStorage();
    const auth = getAuth(app);
    const login = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                user.getIdToken().then((token) => {
                    setIdToken(token);
                    setLocalStorage({ authToken: token });
                });
            }
        });
    };

    const logout = () => {
        signOut(auth);

        onAuthStateChanged(auth, (user) => {
            if (user) {
                user.getIdToken().then((token) => {
                    setIdToken(token);
                });
            }
        });
    };
    return { login, logout, idToken };
};

export const useImageUpload = () => {
    const [uploadFileId, setUploadFileId] = useState("");
    const uploadBlob = async (file: FileList) => {
        var uuid = require("node-uuid");
        setUploadFileId(uuid.v4() + "." + file[0].name.split(".")[1]);
        const blobService = new BlobServiceClient(
            String(process.env.NEXT_PUBLIC_BROB_SERVICE_URL)
        );
        const containerName = String(process.env.NEXT_PUBLIC_CONTAINER_NAME);
        const containerClient: ContainerClient =
            blobService.getContainerClient(containerName);
        await containerClient.createIfNotExists({
            access: "container",
        });
        const blobClient = containerClient.getBlockBlobClient(uploadFileId);
        const options = { blobHTTPHeaders: { blobContentType: file[0].type } };

        await blobClient.uploadData(file[0], options);
    };
    return { uploadBlob, uploadFileId };
};

const getSearchResultDoc = gql`
    query test($_ilike: String!) {
        article(where: { title: { _ilike: $_ilike } }, limit: 10) {
            title
            githubUrl
            fileId
            createdAt
            caption
            authorId
        }
    }
`;
export const useSearch = () => {
    const router = useRouter();
    const searchWord = String(router.query.searchWord);
    const { debouncedKeyword } = useDebounceSearch({
        keyword: searchWord,
        timeOutMillSec: 1000,
    });
    console.log(debouncedKeyword);
    const { data } = useQuery(getSearchResultDoc, {
        variables: { _ilike: debouncedKeyword },
    });
    console.log(data);
    return {
        article: data?.article,
    };
};
export const useSearchParams = () => {
    const router = useRouter();

    const setSearchParams = (searchWord: SearchWordProps) => {
        router.replace({
            query: searchWord,
        });
    };

    return {
        isReady: router.isReady,
        setMediaFilterParams: setSearchParams,
    };
};

export const getPortFolioByIdDoc = gql`
    query getPortFolioById($userId: String!) {
        article(where: { authorId: { _eq: $userId } }) {
            fileId
            githubUrl
            title
            createdAt
            id
        }
    }
`;
const getArticleByIdDoc = gql`
    query getArticleById($articleId: Int!) {
        article(where: { id: { _eq: $articleId } }, limit: 1) {
            authorId
            caption
            createdAt
            fileId
            githubUrl
            id
            title
        }
    }
`;
export const useArticle = () => {
    const router = useRouter();
    const articleId = router.query.articleId;
    const { data, loading } = useQuery(getArticleByIdDoc, {
        variables: { articleId: articleId },
    });
    return {
        article: data?.article[0],
        loading,
    };
};
export const useLocalStorage = () => {
    const getLocalStorage = (key: string) => {
        return Cookies.get(key);
    };
    const setLocalStorage = (setValue: object) => {
        Cookies.set(Object.keys(setValue)[0], Object.values(setValue)[0]);
    };
    return { getLocalStorage, setLocalStorage };
};
export const useDebounceSearch = ({
    keyword,
    timeOutMillSec,
}: DebounceExecuteProps) => {
    const [debouncedKeyword, setDebouncedKeyword] = useState(keyword);
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedKeyword(keyword);
        }, timeOutMillSec);
        return () => {
            clearTimeout(timer);
        };
    }, [keyword, timeOutMillSec]);
    return { debouncedKeyword };
};
