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
import { useRouter } from "next/router";
import { useState } from "react";
import { SearchWordProps } from "../Types/type";
export const useUploadArticle = () => {
    const uploadDocument = gql`
        mutation uploadArticle(
            $title: String!
            $caption: String!
            $authorId: String!
            $createdAt: timestamptz!
            $githubUrl: String!
            $fileId: uuid!
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
    const auth = getAuth(app);
    const login = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                user.getIdToken().then((token) => {
                    setIdToken(token);
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
    const searchWord = router.query.searchWord;
    const { data } = useQuery(getSearchResultDoc, {
        variables: { _ilike: searchWord },
    });
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
