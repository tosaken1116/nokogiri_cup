import GitHubIcon from "@mui/icons-material/GitHub";
import {
    Box,
    Button,
    Divider,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";
import Image from "next/image";
import { useArticle } from "../../Hooks/hooks";
import { ArticleProps } from "../../Types/type";
import Date from "../common/Date";
import UserCard from "../common/UserCard";

export default function ArticleRow({
    createdAt,
    title,
    githubUrl,
    authorId,
    articleId,
    caption,
    user,
    fileId = "",
}: ArticleProps) {
    const { setArticleParams } = useArticle();
    return (
        <Box>
            <Stack direction="row" p={2} spacing={3}>
                <Image
                    width={100}
                    height={60}
                    src={
                        "https://hackznokogiritosaken1116.blob.core.windows.net/hackznokogiricontainer/cat.png"
                    }
                    alt=""
                    style={{ borderRadius: "15px" }}
                ></Image>
                <Stack spacing={2}>
                    <Button
                        onClick={() => setArticleParams(articleId)}
                        sx={{ textTransform: "none", p: 0 }}
                    >
                        <Typography variant="h5">{title}</Typography>
                    </Button>

                    <Stack direction="row">
                        <Stack>
                            <UserCard {...user} authorId={authorId} />

                            <Date dateString={createdAt}></Date>
                        </Stack>
                        <Box>
                            <IconButton
                                href={githubUrl ?? ""}
                                disabled={githubUrl == ""}
                            >
                                <GitHubIcon />
                            </IconButton>
                        </Box>
                    </Stack>
                </Stack>
            </Stack>
            <Divider variant="fullWidth" />
        </Box>
    );
}
