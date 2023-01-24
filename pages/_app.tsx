import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { useLocalStorage } from "../Hooks/hooks";
import { initializeApollo } from "../libs/apolloClient";
import "../styles/globals.css";
import "../styles/markdown.css";

function MyApp({ Component, pageProps }: AppProps) {
    const { getLocalStorage } = useLocalStorage();
    const client = initializeApollo(getLocalStorage("authToken"));
    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
}

export default MyApp;
