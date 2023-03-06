import { useMutation, useQuery } from "@apollo/client";
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
import { useEffect, useState } from "react";
import {
    getArticleByIdDoc,
    getHomeArticleDoc,
    getSearchResultDoc,
    uploadDoc,
} from "../gqlDocument/document";
import { DebounceExecuteProps, SearchWordProps } from "../Types/type";
export const useUploadArticle = () => {
    const [uploadArticle, { loading }] = useMutation(uploadDoc);
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

export const useSearch = () => {
    const router = useRouter();
    const searchWord = String(router.query.searchWord);
    const { debouncedKeyword } = useDebounceSearch({
        keyword: searchWord,
        timeOutMillSec: 1000,
    });
    const { data, loading } = useQuery(getSearchResultDoc, {
        variables: {
            _ilike: debouncedKeyword == "" ? "" : `%${debouncedKeyword}%`,
        },
    });
    return {
        article: data?.article,
        isLoading: loading,
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

export const useArticle = () => {
    const router = useRouter();
    const articleId = router.query.articleId;
    const { data, loading } = useQuery(getArticleByIdDoc, {
        variables: { articleId: articleId },
    });
    const closeArticle = () => {
        router.replace({ query: { ...router.query, ["articleId"]: null } });
    };
    const setArticleParams = (articleId: string) => {
        router.replace({
            query: { ...router.query, ["articleId"]: articleId },
        });
    };
    return {
        article: data?.article[0],
        modalOpen: Boolean(articleId),
        setArticleParams,
        closeArticle,
        loading,
    };
};
export const useLocalStorage = () => {
    const getLocalStorage = (key: string) => {
        if (typeof window !== "undefined") {
            const value = localStorage.getItem(key);
            return value;
        }
        return null;
    };
    const setLocalStorage = (setValue: object) => {
        localStorage.setItem(
            Object.keys(setValue)[0],
            Object.values(setValue)[0]
        );
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

export const useHomeArticle = () => {
    const { data, loading } = useQuery(getHomeArticleDoc);
    return { articles: data?.article, isLoading: loading };
};
