import { gql, useMutation } from "@apollo/client";
export const useUploadArticle = () => {
    const uploadDocument = gql`
        mutation uploadArticle(
            $title: String!
            $caption: String!
            $authorId: String!
            $createdAt: timestamptz!
            $githubUrl: String!
        ) {
            insertArticle(
                objects: {
                    title: $title
                    caption: $caption
                    authorId: $authorId
                    createdAt: $createdAt
                    githubUrl: $githubUrl
                }
            ) {
                returning {
                    id
                }
            }
        }
    `;
    const [uploadArticle, { loading }] = useMutation(uploadDocument);
    return { uploadArticle, loading };
};
