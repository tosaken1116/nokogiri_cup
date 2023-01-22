import { gql, useMutation } from "@apollo/client";
import { BlobServiceClient, ContainerClient } from "@azure/storage-blob";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { useState } from "react";
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
        setUploadFileId(uuid.v4());
        const blobService = new BlobServiceClient(
            String(process.env.NEXT_PUBLIC_BROB_SERVICE_URL)
        );
        const containerName = String(process.env.NEXT_PUBLIC_CONTAINER_NAME);
        const containerClient: ContainerClient =
            blobService.getContainerClient(containerName);
        await containerClient.createIfNotExists({
            access: "container",
        });
        const blobClient = containerClient.getBlockBlobClient(
            uploadFileId + "." + file[0].name.split(".")[1]
        );
        const options = { blobHTTPHeaders: { blobContentType: file[0].type } };

        await blobClient.uploadData(file[0], options);
    };
    return { uploadBlob, uploadFileId };
};
