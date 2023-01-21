import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Paper, Stack, Typography } from "@mui/material";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { ArticleProps } from "../../Types/type";
const MarkdownArticle = ({
    title,
    caption,
    authorId,
    createdAt,
    githubUrl,
}: ArticleProps) => {
    return (
        <Paper
            sx={{ width: "-webkit-fill-available" }}
            className="markdown-preview"
        >
            <Stack p={2}>
                <Stack>
                    <Stack>
                        <Typography variant="h4">{title}</Typography>
                        <Link href={githubUrl}>
                            <GitHubIcon />
                        </Link>
                    </Stack>
                    <Stack spacing={1} direction="row">
                        <Box sx={{ flexGrow: 1 }}></Box>
                        <Typography variant="caption">{createdAt}</Typography>
                        <Typography variant="caption">{authorId}</Typography>
                    </Stack>
                </Stack>
                <ReactMarkdown remarkPlugins={[gfm]} unwrapDisallowed={false}>
                    {caption}
                </ReactMarkdown>
            </Stack>
        </Paper>
    );
};
export default MarkdownArticle;
