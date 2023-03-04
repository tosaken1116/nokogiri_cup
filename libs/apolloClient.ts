import {
    ApolloClient,
    HttpLink,
    InMemoryCache,
    NormalizedCacheObject,
} from "@apollo/client";
import "cross-fetch/polyfill";

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;
const createApolloClient = (authToken?: string) => {
    return new ApolloClient({
        ssrMode: typeof window === "undefined",
        link: new HttpLink({
            uri: "https://flowing-squid-27.hasura.app/v1/graphql",
            headers: {
                "x-hasura-admin-secret":
                    process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET,
                authorization:
                    authToken && authToken !== "undefined"
                        ? `Bearer ${authToken}`
                        : "",
            },
        }),
        cache: new InMemoryCache(),
    });
};
export const initializeApollo = (authToken?: string) => {
    const _apolloClient = apolloClient ?? createApolloClient(authToken);
    if (typeof window === "undefined") return _apolloClient;
    if (!apolloClient) apolloClient = _apolloClient;
    return _apolloClient;
};
