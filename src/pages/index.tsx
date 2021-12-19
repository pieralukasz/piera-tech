import type { GetServerSideProps, NextPage } from "next";
import createApolloClient from "@/api/apollo";

import { GetAllPostsWithSlugQuery } from "@/api/queries/queries.generated";
import { ALL_POSTS_WITH_SLUG_QUERY } from "@/api/queries/queries";

import { Page } from "@/components/layout/Page";
import { APP_NAME } from "@/env/config";
import Head from "next/head";
import React from "react";
import { FeaturePost } from "@/components/layout/FeaturePost/FeaturePost";
import { WelcomeHeader } from "@/components/layout/WelcomeHeader/WelcomeHeader";

interface Props extends GetAllPostsWithSlugQuery {
  preview: boolean;
}

const Home: NextPage<Props> = (props) => {
  const { preview, posts } = props;

  return (
    <Page preview={preview}>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <WelcomeHeader />
      <FeaturePost
        title={"Union Types and Sortable Relations with GraphCMS"}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Apparet statim, quae sint officia, quae actiones. Illis videtur, qui illud non dubitant bonum dicere -; Deinde dolorem quem maximum?"
        content={posts[0].content.html}
        tags={posts[0].tags.map(({ name }) => ({
          label: name,
        }))}
        date="23 December 2021"
      />
    </Page>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({
  preview = false,
}) => {
  const client = createApolloClient({ preview });

  const { data } = await client.query<GetAllPostsWithSlugQuery>({
    query: ALL_POSTS_WITH_SLUG_QUERY,
  });

  return {
    props: {
      preview,
      posts: data.posts,
    },
  };
};
