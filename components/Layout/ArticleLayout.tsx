import { Box, Stack, useMediaQuery } from "@mui/material";
import { LayoutProps } from "./Layout";
import MarkdownLayout from "./MarkdownLayout";

export default function ArticleLayout({ children }: LayoutProps) {
    const matches = useMediaQuery("(min-width:700px)");
    return (
        <Stack direction="row" flexGrow={1}>
            <Box sx={{ width: matches ? "50%" : "100%" }}>{children}</Box>

            <MarkdownLayout />
        </Stack>
    );
}
