/* eslint no-shadow: 0 */
import * as Types from "../../types/generated/types";

export type GetAllPostsWithSlugQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type GetAllPostsWithSlugQuery = {
  __typename?: "Query";
  posts: Array<{ __typename?: "Post"; slug: string }>;
};

export type PostBySlugQueryVariables = Types.Exact<{
  slug: Types.Scalars["String"];
  stage: Types.Stage;
}>;

export type PostBySlugQuery = {
  __typename?: "Query";
  post?: { __typename?: "Post"; slug: string } | null | undefined;
};

export type PostContentBySlugQueryVariables = Types.Exact<{
  slug: Types.Scalars["String"];
  stage: Types.Stage;
}>;

export type PostContentBySlugQuery = {
  __typename?: "Query";
  post?:
    | {
        __typename?: "Post";
        title: string;
        slug: string;
        date: any;
        content: { __typename?: "RichText"; html: string };
        ogImage?: { __typename?: "Asset"; url: string } | null | undefined;
        coverImage?: { __typename?: "Asset"; url: string } | null | undefined;
        author?:
          | {
              __typename?: "Author";
              name: string;
              picture?:
                | { __typename?: "Asset"; url: string }
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
  morePosts: Array<{
    __typename?: "Post";
    title: string;
    slug: string;
    excerpt?: string | null | undefined;
    date: any;
    coverImage?: { __typename?: "Asset"; url: string } | null | undefined;
    author?:
      | {
          __typename?: "Author";
          name: string;
          picture?: { __typename?: "Asset"; url: string } | null | undefined;
        }
      | null
      | undefined;
  }>;
};
