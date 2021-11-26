import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import createApolloClient from "@/api/apollo";
import { Button } from "@mui/material";
import { Link } from "@/components/atoms/Link";

import { GetAllPostsWithSlugQuery } from "@/api/queries/queries.generated";
import { ALL_POSTS_WITH_SLUG_QUERY } from "@/api/queries/queries";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Button component={Link} href={"/about"}>
        HELLO GITL
      </Button>
    </div>
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
