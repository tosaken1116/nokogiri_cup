import { CircularProgress, Modal, useMediaQuery } from "@mui/material";
import { useArticle } from "../Hooks/hooks";
import MarkdownArticle from "./MarkdownArticle";

export default function MarkdownLayout() {
    const { article, loading, modalOpen, closeArticle } = useArticle();
    const matches: boolean = useMediaQuery("(min-width:1000px)");
    if (loading) {
        return <CircularProgress></CircularProgress>;
    }
    if (article == undefined) {
        return <></>;
    }
    if (matches) {
        return <MarkdownArticle {...article}></MarkdownArticle>;
    } else {
        return (
            <Modal
                open={modalOpen}
                onClose={() => closeArticle()}
                sx={{
                    width: "200px",
                }}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <MarkdownArticle {...article}></MarkdownArticle>
            </Modal>
        );
    }
}
