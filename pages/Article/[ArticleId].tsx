import CircularProgress from "@mui/material/CircularProgress";
import MarkdownArticle from "../../components/MarkdownArticle";
import { useArticle } from "../../Hooks/hooks";

export default function Article() {
    const { article, loading } = useArticle();
    if (loading) {
        return <CircularProgress></CircularProgress>;
    }
    return (
        <>
            <MarkdownArticle {...article}></MarkdownArticle>
        </>
    );
}
