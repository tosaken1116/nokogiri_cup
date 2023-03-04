import { gql, useQuery } from "@apollo/client";
import { List, ListItem } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { ArticleProps } from "../../Types/type";
import ArticleRow from "../Article/ArticleRow";

function HomeArticles({ articles }: { articles: ArticleProps[] }) {
    return (
        <List sx={{ maxHeight: "70vh", overflow: "auto" }}>
            {articles?.map((articleProps, index: number) => (
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
    const { data, loading } = useQuery(getHomeArticleDoc);

    if (loading) {
        return <CircularProgress />;
    }
    return <HomeArticles articles={data?.article} />;
}
