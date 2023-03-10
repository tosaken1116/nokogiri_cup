import { useMutation, useQuery } from "@apollo/client";
import { BlobServiceClient, ContainerClient } from "@azure/storage-blob";

import { initializeApp } from "firebase/app";
import {
    browserSessionPersistence,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    setPersistence,
    signInWithRedirect,
    signOut,
} from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
    getArticleByIdDoc,
    getHomeArticleDoc,
    getPortFolioByIdDoc,
    getSearchResultDoc,
    getUserProfileByIdDoc,
    getUserStatusDoc,
    updateUserProfileDoc,
    uploadDoc,
} from "../gqlDocument/document";
import {
    DebounceExecuteProps,
    SearchWordProps,
    UserProfile,
    UseUserStatusProps,
} from "../Types/type";
export const useUploadArticle = () => {
    const [uploadArticle, { loading }] = useMutation(uploadDoc);
    return { uploadArticle, loading };
};

export const useAuthentication = () => {
    const router = useRouter();
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

    const app = initializeApp(firebaseConfig);
    const { setLocalStorage } = useLocalStorage();
    const auth = getAuth(app);
    const login = () => {
        const provider = new GoogleAuthProvider();
        setPersistence(auth, browserSessionPersistence).then(() => {
            return signInWithRedirect(auth, provider);
        });

        onAuthStateChanged(auth, (user) => {
            if (user) {
                user.getIdToken().then((token) => {
                    setLocalStorage({ authToken: token, userId: user.uid });
                    router.reload();
                });
            }
        });
    };

    const logout = () => {
        signOut(auth);
        setLocalStorage({ authToken: "", userId: "" });
        router.reload();
    };
    return { login, logout };
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
        articleId,
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
        Object.entries(setValue).map(([key, value]) => {
            localStorage.setItem(key, value);
        });
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
export const useUserStatus = ({
    userId,
    loginRequired,
}: UseUserStatusProps) => {
    const { login } = useAuthentication();
    const { getLocalStorage } = useLocalStorage();
    const { data, loading, error } = useQuery(getUserStatusDoc, {
        variables: {
            userId: userId,
        },
    });
    if (
        (error?.graphQLErrors[0].extensions.code == "invalid-headers" ||
            error?.graphQLErrors[0].extensions.code == "invalid-jwt") &&
        getLocalStorage("authToken") != "" &&
        loginRequired
    ) {
        login();
    }
    return {
        user: data?.users[0],
        isLoading: loading,
    };
};
export const useUpdateUserProfile = () => {
    const [updateUserProfile, { error, loading }] =
        useMutation(updateUserProfileDoc);
    const handleUpdateUserProfile = async (updateValues: UserProfile) => {
        const result = await updateUserProfile({
            variables: { ...updateValues },
        });
        return result;
    };
    return { handleUpdateUserProfile, loading };
};

export const useGetUserProfile = (userId: string) => {
    const { data, loading, error } = useQuery(getUserProfileByIdDoc, {
        variables: { userId: userId },
    });
    return {
        user: data?.usersByPk,
        isLoading: loading,
    };
};
export const useUserPopoverProps = (userId: string) => {
    const { data, loading, error } = useQuery(getUserProfileByIdDoc, {
        variables: { userId: userId },
    });
    return {
        user: data?.usersByPk,
        isLoading: loading,
    };
};
export const usePortfolioArticles = () => {
    const router = useRouter();

    const { data, error, loading } = useQuery(getPortFolioByIdDoc, {
        variables: { userId: router.query.userId },
    });
    return { articles: data?.article, isLoading: loading };
};

export const usePortfolioHeaderProps = () => {};
