import { Box, CircularProgress, Modal, useMediaQuery } from "@mui/material";
import { useArticle } from "../../Hooks/hooks";
import { MarkdownModalProps } from "../../Types/type";
import MarkdownArticle from "../Article/MarkdownArticle";

export default function MarkdownLayout() {
    const { article, loading, modalOpen, closeArticle } = useArticle();
    const matches: boolean = useMediaQuery("(min-width:800px)");

    if (article == undefined) {
        return <></>;
    }
    if (matches) {
        return (
            <Box
                height="100%"
                sx={{ mt: "4vh", mr: "3vw" }}
                width="55%"
                alignItems="center"
            >
                <MarkdownArticle {...article}></MarkdownArticle>
            </Box>
        );
    } else {
        return (
            <MarkdownModal
                loading={loading}
                closeArticle={closeArticle}
                modalOpen={modalOpen}
                article={article}
            />
        );
    }
}
export const MarkdownModal = ({
    modalOpen,
    closeArticle,
    loading,
    article,
}: MarkdownModalProps) => {
    return (
        <Modal
            open={modalOpen}
            onClose={() => closeArticle()}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            {loading ? (
                <CircularProgress />
            ) : (
                <Box
                    sx={{
                        width: "300px",
                        position: "absolute" as "absolute",
                        top: "50%",
                        left: "50%",
                        height: "80vh",
                        overflowY: "scroll",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <MarkdownArticle {...article}></MarkdownArticle>
                </Box>
            )}
        </Modal>
    );
};
