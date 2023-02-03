import CircularProgress from "@mui/material/CircularProgress";
import { useArticle } from "../../Hooks/hooks";
import MarkdownArticle from "../components/MarkdownArticle";

export default function Article() {
    const { article, loading } = useArticle();
    if (loading) {
        return <CircularProgress></CircularProgress>;
    }
    return (
        <>
            <MarkdownArticle
                title={article.title}
                authorId={article.authorId}
                caption={article.caption}
                githubUrl={article.githubUrl}
                createdAt={article.createdAt}
            ></MarkdownArticle>
        </>
    );
}
