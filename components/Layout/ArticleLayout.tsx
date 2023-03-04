import { Box, Stack, useMediaQuery } from "@mui/material";
import ArticlesWrapper from "./HomeArticles";
import MarkdownLayout from "./MarkdownLayout";

export default function ArticleLayout() {
    const matches = useMediaQuery("(min-width:700px)");
    return (
        <Stack direction="row" flexGrow={1}>
            <Box sx={{ width: matches ? "50%" : "100%" }}>
                <ArticlesWrapper></ArticlesWrapper>
            </Box>

            <MarkdownLayout />
        </Stack>
    );
}
