import { gql, useQuery } from "@apollo/client";
import { List, ListItem } from "@mui/material";
import ArticleRow from "./ArticleRow";

function HomeArticles({ data }) {
    return (
        <List sx={{ maxHeight: "70vh", overflow: "auto" }}>
            {data?.article?.map((articleProps, index: number) => (
                <ListItem key={index}>
                    <ArticleRow {...articleProps} />
                </ListItem>
            ))}
        </List>
    );
}

export default function ArticlesWrapper() {
    const getHomeArticleDoc = gql`
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
    const { data } = useQuery(getHomeArticleDoc);
    return <HomeArticles data={data} />;
}
