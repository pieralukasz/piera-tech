import type { GetServerSideProps, NextPage } from "next";
import createApolloClient from "@/api/apollo";

import { Typography } from "@mui/material";

import { GetAllPostsWithSlugQuery } from "@/api/queries/queries.generated";
import { ALL_POSTS_WITH_SLUG_QUERY } from "@/api/queries/queries";

import { Layout } from "@/components/Layout";

interface Props extends GetAllPostsWithSlugQuery {
  preview: boolean;
}

const Home: NextPage<Props> = (props) => {
  const { preview, posts } = props;

  console.log(preview, posts);

  return (
    <Layout preview={preview}>
      <Typography>HOME PAGE</Typography>
    </Layout>
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

  console.log(data);

  return {
    props: {
      preview,
      posts: data.posts,
    },
  };
};
