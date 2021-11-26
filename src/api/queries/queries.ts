import gql from "graphql-tag";

export const ALL_POSTS_WITH_SLUG_QUERY = gql`
  query GetAllPostsWithSlug {
    posts {
      slug
    }
  }
`;

export const GET_POST_BY_SLUG_QUERY = gql`
  query PostBySlug($slug: String!, $stage: Stage!) {
    post(where: { slug: $slug }, stage: $stage) {
      slug
    }
  }
`;

export const GET_POST_CONTENT_BY_SLUG_QUERY = gql`
  query PostContentBySlug($slug: String!, $stage: Stage!) {
    post(stage: $stage, where: { slug: $slug }) {
      title
      slug
      content {
        html
      }
      date
      ogImage: coverImage {
        url(
          transformation: {
            image: { resize: { fit: crop, width: 2000, height: 1000 } }
          }
        )
      }
      coverImage {
        url(
          transformation: {
            image: { resize: { fit: crop, width: 2000, height: 1000 } }
          }
        )
      }
      author {
        name
        picture {
          url(
            transformation: {
              image: { resize: { fit: crop, width: 100, height: 100 } }
            }
          )
        }
      }
    }
    morePosts: posts(
      orderBy: date_DESC
      first: 2
      where: { slug_not_in: [$slug] }
    ) {
      title
      slug
      excerpt
      date
      coverImage {
        url(
          transformation: {
            image: { resize: { fit: crop, width: 2000, height: 1000 } }
          }
        )
      }
      author {
        name
        picture {
          url(
            transformation: {
              image: { resize: { fit: crop, width: 100, height: 100 } }
            }
          )
        }
      }
    }
  }
`;
