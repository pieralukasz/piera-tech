import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { Box, Container } from "@mui/material";

import { Page } from "@/components/page";
import { FeaturePost } from "@/components/posts/feature-post";
import { WelcomeBox } from "@/components/welcome-box";
import { AppShell } from "@/components/headers/app-shell";

import createApolloClient from "@/api/apollo";

import {
  ALL_POSTS_WITH_SLUG_QUERY,
  GetAllPostsWithSlugQuery,
} from "@/api/queries";

import { APP_NAME } from "@/env/config";

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
      <Box sx={{ height: "100vh" }}>
        <AppShell />
        <WelcomeBox />
        <Container sx={{ mt: 4 }}>
          <FeaturePost
            title={"Union Types and Sortable Relations with GraphCMS"}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Apparet statim, quae sint officia, quae actiones. Illis videtur, qui illud non dubitant bonum dicere -; Deinde dolorem quem maximum?"
            content={posts[0].content.html}
            tags={posts[0].tags.map(({ name }) => ({
              label: name,
            }))}
            date="23 December 2021"
          />
        </Container>
      </Box>
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
