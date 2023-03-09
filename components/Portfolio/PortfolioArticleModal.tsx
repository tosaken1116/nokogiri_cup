import { CircularProgress, Modal } from "@mui/material";
import { useArticle } from "../../Hooks/hooks";
import MarkdownArticle from "../Article/MarkdownArticle";

export default function PortfolioArticleModal() {
    const { article, articleId, closeArticle, loading } = useArticle();
    if (articleId == undefined) {
        return <></>;
    }
    if (loading) {
        return <CircularProgress />;
    }
    return (
        <Modal open={articleId != ""} onClose={closeArticle}>
            <MarkdownArticle {...article} />
        </Modal>
    );
}
