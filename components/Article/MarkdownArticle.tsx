import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { ArticleProps } from "../../Types/type";
import Date from "../common/Date";
import UserCard from "../common/UserCard";
export default function MarkdownArticle({
    title,
    caption,
    authorId,
    createdAt,
    githubUrl,
    user,
}: ArticleProps) {
    return (
        <Paper
            sx={{
                flexGrow: 1,
                minHeight: "75vh",
                overflow: "auto",
                border: "0.5px solid",
            }}
            className="markdown-preview"
        >
            <Stack p={2}>
                <Stack>
                    <Stack direction="row">
                        <Typography variant="h4" flexGrow={1}>
                            {title}
                        </Typography>
                        <IconButton
                            href={githubUrl ?? ""}
                            disabled={githubUrl == ""}
                        >
                            <GitHubIcon />
                        </IconButton>
                    </Stack>
                    <Stack spacing={1} direction="row">
                        <Box sx={{ flexGrow: 1 }}></Box>
                        <Date dateString={createdAt}></Date>
                        <UserCard {...user} authorId={authorId}></UserCard>
                    </Stack>
                </Stack>
                <ReactMarkdown remarkPlugins={[gfm]} unwrapDisallowed={false}>
                    {caption}
                </ReactMarkdown>
            </Stack>
        </Paper>
    );
}
