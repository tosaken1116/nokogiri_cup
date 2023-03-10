import { List, ListItem } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useHomeArticle, useSearch } from "../../Hooks/hooks";
import { ArticleProps } from "../../Types/type";
import ArticleRow from "./ArticleRow";

export function ArticleList({ articles }: { articles: ArticleProps[] }) {
    return (
        <List sx={{ maxHeight: "80vh", overflow: "auto" }}>
            {articles?.map((articleProps, index: number) => (
                <ListItem key={index} sx={{ justifyContent: "center" }}>
                    <ArticleRow {...articleProps} />
                </ListItem>
            ))}
        </List>
    );
}

export default function ArticlesWrapper() {
    const { articles, isLoading } = useHomeArticle();
    if (isLoading) {
        return <CircularProgress />;
    }
    return <ArticleList articles={articles} />;
}
export function SearchArticlesWrapper() {
    const { article, isLoading } = useSearch();
    if (isLoading) {
        return <CircularProgress />;
    }
    return <ArticleList articles={article}></ArticleList>;
}
