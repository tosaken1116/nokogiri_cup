import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import { createMuiTheme } from "../Hooks/createTheme";
import { useLocalStorage } from "../Hooks/hooks";
import { initializeApollo } from "../libs/apolloClient";
import "../styles/globals.css";
import "../styles/markdown.css";

function MyApp({ Component, pageProps }: AppProps) {
    const { getLocalStorage } = useLocalStorage();
    const client = initializeApollo(getLocalStorage("authToken") ?? "");
    const theme = createMuiTheme();
    return (
        <ApolloProvider client={client}>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <ThemeProvider theme={theme}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </ApolloProvider>
    );
}

export default MyApp;
