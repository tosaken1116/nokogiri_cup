import { gql, useQuery } from "@apollo/client";
import { Box, List, ListItem } from "@mui/material";
import ArticleRow from "../components/ArticleRow";
import { ArticleProps } from "../Types/type";

export default function Home() {
    const getHomeArticleDoc = gql`
        query test {
            article(limit: 10, orderBy: { id: DESC }) {
                title
                githubUrl
                fileId
                createdAt
                caption
                authorId
            }
        }
    `;
    const { data } = useQuery(getHomeArticleDoc);
    return (
        <Box>
            <List sx={{ maxHeight: "70vh", overflow: "auto" }}>
                {data?.article?.map(
                    (
                        {
                            createdAt,
                            title,
                            githubUrl,
                            authorId,
                            caption,
                        }: ArticleProps,
                        index: number
                    ) => (
                        <ListItem key={index}>
                            <ArticleRow
                                createdAt={createdAt}
                                title={title}
                                githubUrl={githubUrl}
                                authorId={authorId}
                                caption={caption}
                            />
                        </ListItem>
                    )
                )}
            </List>
        </Box>
    );
}
