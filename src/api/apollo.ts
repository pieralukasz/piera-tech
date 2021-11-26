import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

const isBrowser = typeof window !== "undefined";

interface Props {
  preview: boolean;
}

function createIsomorphicLink({ preview }: Props): HttpLink {
  return new HttpLink({
    uri: process.env.GRAPHCMS_PROJECT_API,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        preview
          ? process.env.GRAPHCMS_DEV_AUTH_TOKEN
          : process.env.GRAPHCMS_PROD_AUTH_TOKEN
      }`,
    },
  });
}

export default function createApolloClient({
  preview,
}: Props): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient({
    ssrMode: !isBrowser,
    link: createIsomorphicLink({ preview }),
    cache: new InMemoryCache(),
  });
}
