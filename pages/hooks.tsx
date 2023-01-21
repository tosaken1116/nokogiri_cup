import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { useState } from "react";
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
