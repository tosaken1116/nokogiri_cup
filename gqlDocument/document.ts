import { gql } from "@apollo/client";

export const uploadDoc = gql`
    mutation uploadArticle(
        $title: String!
        $caption: String!
        $authorId: String!
        $createdAt: timestamptz!
        $githubUrl: String!
        $fileId: String!
    ) {
        insertArticle(
            objects: {
                title: $title
                caption: $caption
                authorId: $authorId
                createdAt: $createdAt
                githubUrl: $githubUrl
                fileId: $fileId
            }
        ) {
            returning {
                id
            }
        }
    }
`;
export const getSearchResultDoc = gql`
    query test($_ilike: String!) {
        article(where: { title: { _ilike: $_ilike } }, limit: 10) {
            articleId
            title
            githubUrl
            fileId
            createdAt
            caption
            authorId
        }
    }
`;
export const getPortFolioByIdDoc = gql`
    query getPortFolioById($userId: String!) {
        article(where: { authorId: { _eq: $userId } }) {
            fileId
            githubUrl
            title
            createdAt
            id
        }
    }
`;
export const getHomeArticleDoc = gql`
    query test {
        article(limit: 10, orderBy: { id: DESC }) {
            articleId
            title
            githubUrl
            fileId
            createdAt
            caption
            authorId
        }
    }
`;
export const getArticleByIdDoc = gql`
    query getArticleById($articleId: uuid!) {
        article(where: { articleId: { _eq: $articleId } }, limit: 1) {
            authorId
            caption
            createdAt
            fileId
            githubUrl
            id
            title
        }
    }
`;
