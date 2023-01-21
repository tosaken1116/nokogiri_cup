import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import {
    Box,
    IconButton,
    Paper,
    Stack,
    TextareaAutosize,
    TextField,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/router";

import { useState } from "react";
import MarkdownArticle from "./components/MarkdownArticle";
import { useUploadArticle } from "./hooks";
export default function AddArticle() {
    const router = useRouter();

    const { uploadArticle, loading } = useUploadArticle();
    const now = new Date();
    const today =
        now.getFullYear() + "/" + now.getMonth() + 1 + "/" + now.getDate();
    const [input, setInput] = useState({
        title: "",
        caption: "",
        githubUrl: "",
        createdAt: String(today),
    });
    const setData = (e: any) => {
        e.preventDefault();

        setInput({ ...input, [e.target.name]: e.target.value });
    };
    const handleUpload = () => {
        console.log(input);
        uploadArticle({
            variables: {
                title: input.title,
                caption: input.caption,
                authorId: "2",
                createdAt: input.createdAt,
                githubUrl: input.githubUrl,
            },
        });
        if (loading) {
            return <CircularProgress />;
        }
        router.push("./");
    };
    return (
        <Box>
            <Stack
                direction="row"
                spacing={2}
                sx={{
                    height: "100vh",
                }}
            >
                <Stack
                    sx={{ alignItems: "center", justifyContent: "center" }}
                    spacing={2}
                >
                    <Paper>
                        <TextField
                            label="title"
                            sx={{ width: "300px" }}
                            name="title"
                            onChange={setData}
                            size="small"
                        ></TextField>
                    </Paper>
                    <Paper>
                        <TextField
                            label="githuburl"
                            sx={{ width: "300px" }}
                            name="githuburl"
                            onChange={setData}
                            size="small"
                        ></TextField>
                    </Paper>
                    <Paper>
                        <TextareaAutosize
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
                ></MarkdownArticle>
            </Stack>
        </Box>
        // <div>
        //     <button onClick={() => handleUpload()}>click!</button>
        // </div>
    );
}
