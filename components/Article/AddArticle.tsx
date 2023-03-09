import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import {
    Box,
    Button,
    IconButton,
    Paper,
    Slide,
    Stack,
    TextareaAutosize,
    TextField,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import {
    useImageUpload,
    useLocalStorage,
    useUploadArticle,
} from "../../Hooks/hooks";
import MarkdownArticle from "./MarkdownArticle";
type AddArticleProps = {
    isAddArticleMode: boolean;
    closeAddArticleMode: () => void;
};
export default function AddArticle({
    isAddArticleMode,
    closeAddArticleMode,
}: AddArticleProps) {
    const { uploadBlob, uploadFileId } = useImageUpload();
    const { uploadArticle, loading } = useUploadArticle();
    const { getLocalStorage } = useLocalStorage();
    const now = new Date();
    const today = `${now.getFullYear()}-${("0" + (now.getMonth() + 1)).slice(
        -2
    )}-${("0" + now.getDate()).slice(-2)} ${("0" + now.getHours()).slice(
        -2
    )}:${("0" + now.getMinutes()).slice(-2)}`;
    const userId = getLocalStorage("userId");
    const initialInputValue = {
        title: "",
        caption: "",
        githubUrl: "",
        createdAt: String(today),
        fileId: "",
        authorId: userId,
    };
    const [input, setInput] = useState({
        title: "",
        caption: "",
        githubUrl: "",
        createdAt: String(today),
        fileId: "",
        authorId: userId,
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
                authorId: input.authorId,
                createdAt: input.createdAt,
                githubUrl: input.githubUrl,
                fileId: "",
            },
        });

        if (loading) {
            return <CircularProgress />;
        }
        setInput(initialInputValue);
        // router.push("./");
    };
    return (
        <Slide direction="up" in={isAddArticleMode} mountOnEnter unmountOnExit>
            <Box
                p={3}
                sx={{
                    width: "95vw",
                    height: "100%",
                    flexGrow: "1",
                    backgroundColor: "white",
                    zIndex: 1000,
                    ml: "70px",
                    position: "relative",
                }}
            >
                <IconButton
                    onClick={closeAddArticleMode}
                    sx={{ position: "absolute", right: 0, top: 0 }}
                >
                    <HighlightOffOutlinedIcon fontSize="large" />
                </IconButton>
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
                                placeholder="マークダウンが利用できます"
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
                        authorId={String(userId)}
                        articleId=""
                    ></MarkdownArticle>
                </Stack>
            </Box>
        </Slide>
    );
}
