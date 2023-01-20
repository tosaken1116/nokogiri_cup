import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import "cross-fetch/polyfill";

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;
const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri: "https://flowing-squid-27.hasura.app/v1/graphql",
      headers: {
        "x-hasura-admin-secret":
          "bW9gCJNDlx3och5DV5YE9K6zF0XCNzPPVF0sxhlX1p2m6HMSN0nwVrBu8dM0NpgK",
        // "x-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET,
      },
    }),
    cache: new InMemoryCache(),
  });
};
export const initializeApollo = (initialState = null) => {
  const _apolloClient = apolloClient ?? createApolloClient();
  if (typeof window === "undefined") return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};
