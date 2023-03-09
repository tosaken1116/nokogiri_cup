import { GitHub } from "@mui/icons-material";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import {
    Box,
    Button,
    CardContent,
    IconButton,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import Image from "next/image";
import { useArticle } from "../../Hooks/hooks";
import { PortfolioArticlesCardProps } from "../../Types/type";
import Date from "../common/Date";
export default function PortfolioArticlesCard({
    fileId,
    githubUrl,
    title,
    createdAt,
    articleId,
}: PortfolioArticlesCardProps) {
    const { setArticleParams } = useArticle();
    return (
        <CardContent>
            <Paper>
                <Button
                    sx={{
                        textTransform: "none",
                        width: "200px",
                        height: "300px",
                    }}
                    onClick={() => setArticleParams(articleId)}
                >
                    <Stack spacing={2}>
                        {fileId != "" ? (
                            <Image
                                src={fileId ?? ""}
                                alt={title}
                                width={150}
                                height={100}
                            />
                        ) : (
                            <Box
                                width={150}
                                height={100}
                                bgcolor="grey"
                                borderRadius={"15px"}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <ArticleOutlinedIcon sx={{ color: "white" }} />
                            </Box>
                        )}
                        <Typography>{title}</Typography>
                        <Date dateString={createdAt} />
                        <Box>
                            <IconButton
                                href={githubUrl == "" ? githubUrl : ""}
                                disabled={githubUrl == ""}
                            >
                                <GitHub />
                            </IconButton>
                        </Box>
                    </Stack>
                </Button>
            </Paper>
        </CardContent>
    );
}
