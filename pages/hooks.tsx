import { gql, useMutation } from "@apollo/client";
export const useUploadArticle = () => {
    const uploadDocument = gql`
        mutation uploadArticle(
            $title: String!
            $caption: String!
            $authorId: String!
            $createdAt: timestamptz!
        ) {
            insertArticle(
                objects: {
                    title: $title
                    caption: $caption
                    authorId: $authorId
                    createdAt: $createdAt
                }
            ) {
                returning {
                    id
                }
            }
        }
    `;
    const [uploadArticle] = useMutation(uploadDocument);
    return { uploadArticle };
};
