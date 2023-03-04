import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import {
    Box,
    Button,
    IconButton,
    Paper,
    Stack,
    TextareaAutosize,
    TextField,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/router";
import { useState } from "react";
import MarkdownArticle from "../components/Article/MarkdownArticle";
import { useImageUpload, useUploadArticle } from "../Hooks/hooks";
export default function AddArticle() {
    const router = useRouter();
    const { uploadBlob, uploadFileId } = useImageUpload();
    const { uploadArticle, loading } = useUploadArticle();
    const now = new Date();
    const today = `${now.getFullYear()}-${("0" + (now.getMonth() + 1)).slice(
        -2
    )}-${("0" + now.getDate()).slice(-2)} ${("0" + now.getHours()).slice(
        -2
    )}:${("0" + now.getMinutes()).slice(-2)}`;
    const initialInputValue = {
        title: "",
        caption: "",
        githubUrl: "",
        createdAt: String(today),
        fileId: "",
    };
    const [input, setInput] = useState({
        title: "",
        caption: "",
        githubUrl: "",
        createdAt: String(today),
        fileId: "",
    });
    const setData = (e: any) => {
        e.preventDefault();

        setInput({ ...input, [e.target.name]: e.target.value });
    };
    const handleUpload = () => {
        uploadArticle({
            variables: {
                title: input.title,
                caption: input.caption,
                authorId: "2",
                createdAt: input.createdAt,
                githubUrl: input.githubUrl,
                fileId: "",
            },
        });

        if (loading) {
            return <CircularProgress />;
        }
        setInput(initialInputValue);
        router.push("./");
    };
    return (
        <Box p={3}>
            <Stack
                direction="row"
                spacing={2}
                pt={4}
                sx={{
                    height: "80vh",
                }}
            >
                <Stack
                    sx={{ alignItems: "center", justifyContent: "center" }}
                    spacing={2}
                >
                    <Stack direction="row" sx={{ width: "300px" }}>
                        <Paper>
                            <TextField
                                label="title"
                                name="title"
                                onChange={setData}
                                size="small"
                                required
                            ></TextField>
                        </Paper>

                        <Box sx={{ alignSelf: "center" }}>
                            <Button
                                component="label"
                                startIcon={<AddPhotoAlternateIcon />}
                            >
                                <input
                                    type="file"
                                    accept="image/png, image/jpeg"
                                    hidden
                                    onChange={(e) => {
                                        if (e.target.files != null) {
                                            uploadBlob(e.target.files);
                                        }
                                    }}
                                />
                            </Button>
                        </Box>
                    </Stack>
                    <Paper>
                        <TextField
                            label="githubUrl"
                            sx={{ width: "300px" }}
                            name="githubUrl"
                            onChange={setData}
                            size="small"
                        ></TextField>
                    </Paper>
                    <Paper>
                        <TextareaAutosize
                            required
                            className="markdown-form  w-[300px] "
                            onChange={setData}
                            name="caption"
                            minRows="16"
                            maxRows="16"
                            defaultValue="マークダウンが利用できます"
                        ></TextareaAutosize>
                    </Paper>
                </Stack>
                <Box sx={{ alignSelf: "center" }}>
                    <IconButton
                        onClick={() => handleUpload()}
                        className="animate-bounce"
                    >
                        <ArrowCircleRightIcon fontSize="large" />
                    </IconButton>
                </Box>
                <MarkdownArticle
                    title={input.title}
                    githubUrl={input.githubUrl}
                    caption={input.caption}
                    createdAt={input.createdAt}
                    authorId={"1"}
                    articleId=""
                ></MarkdownArticle>
            </Stack>
        </Box>
        // <div>
        //     <button onClick={() => handleUpload()}>click!</button>
        // </div>
    );
}
