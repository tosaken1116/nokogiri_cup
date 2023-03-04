import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
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
            <ThemeProvider theme={theme}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </ApolloProvider>
    );
}

export default MyApp;
