import { CircularProgress } from "@mui/material";
import { useArticle } from "../../Hooks/hooks";
import { MarkdownModal } from "../Layout/MarkdownLayout";

export default function PortfolioArticleModal() {
    const { article, articleId, closeArticle, loading, modalOpen } =
        useArticle();
    if (articleId == undefined) {
        return <></>;
    }
    if (loading) {
        return <CircularProgress />;
    }
    return (
        <MarkdownModal
            article={article}
            closeArticle={closeArticle}
            loading={loading}
            modalOpen={modalOpen}
        />
    );
}
