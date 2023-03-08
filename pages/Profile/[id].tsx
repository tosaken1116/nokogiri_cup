import AttachFileIcon from "@mui/icons-material/AttachFile";
import CheckIcon from "@mui/icons-material/Check";
import CodeIcon from "@mui/icons-material/Code";
import ComputerIcon from "@mui/icons-material/Computer";
import GitHubIcon from "@mui/icons-material/GitHub";
import SettingsIcon from "@mui/icons-material/Settings";
import TwitterIcon from "@mui/icons-material/Twitter";
import WorkIcon from "@mui/icons-material/Work";
import {
    Avatar,
    Box,
    Button,
    CircularProgress,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Stack,
    TextField,
} from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Icon from "../../components/common/Icon";
import {
    useGetUserProfile,
    useLocalStorage,
    useUpdateUserProfile,
} from "../../Hooks/hooks";

export default function Profile() {
    const router = useRouter();
    const [isEditMode, setIsEditMode] = useState(false);
    const { getLocalStorage } = useLocalStorage();
    const { handleUpdateUserProfile } = useUpdateUserProfile();
    const userId =
        router.query.id == "my" ? getLocalStorage("userId") : router.query.id;
    const { user, isLoading } = useGetUserProfile(String(userId));
    const [editValue, setEditValue] = useState(user);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditValue({ ...editValue, [event.target.name]: event.target.value });
    };
    useEffect(() => {
        setEditValue({ ...user });
    }, [user]);
    if (isLoading) {
        return <CircularProgress />;
    }

    return (
        <Stack direction="row" sx={{ position: "relative" }} spacing={3}>
            <IconButton
                onClick={() => setIsEditMode(!isEditMode)}
                sx={{
                    position: "absolute",
                    right: "10%",
                    animation: isEditMode ? "spin 2s ease infinite" : "",
                    "@keyframes spin": {
                        "0%": {
                            transform: "rotate(0deg)",
                        },
                        "30%": {
                            transform: "rotate(240deg)",
                        },

                        "100%": {
                            transform: "rotate(480deg)",
                        },
                    },
                }}
            >
                <SettingsIcon />
            </IconButton>
            <Button
                onClick={() => {
                    handleUpdateUserProfile({ ...editValue, ["id"]: userId });
                    setIsEditMode(false);
                }}
                startIcon={<CheckIcon />}
                variant="contained"
                hidden={!isEditMode}
                sx={{
                    position: "absolute",
                    borderRadius: "1000px",
                    color: "green",
                    right: "10%",
                    bottom: "5%",
                }}
            >
                完了
            </Button>
            <Stack spacing={2} sx={{ width: "180px" }}>
                <Box sx={{ textAlign: "-webkit-center" }}>
                    <Icon iconPath={user.iconPath} size="xl" />
                </Box>
                <Stack
                    direction={isEditMode ? "column" : "row"}
                    sx={{ placeContent: "center" }}
                >
                    <Stack direction="row">
                        <Avatar sx={{ m: 0.5 }}>
                            <IconButton
                                href={
                                    user.githubUrl == "" ? "" : user.githubUrl
                                }
                                disabled={user.github == ""}
                            >
                                <GitHubIcon />
                            </IconButton>
                        </Avatar>
                        <TextField
                            sx={{ display: !isEditMode ? "none" : "block" }}
                            name="githubUrl"
                            onChange={handleChange}
                            value={editValue.githubUrl}
                            disabled={!isEditMode}
                            variant="standard"
                            InputProps={{
                                disableUnderline: true,
                            }}
                        />
                    </Stack>
                    <Stack direction="row">
                        <Avatar sx={{ m: 0.5 }}>
                            <IconButton
                                href={
                                    user.twitterUrl == "" ? "" : user.twitterUrl
                                }
                                disabled={user.twitterUrl == ""}
                            >
                                <TwitterIcon />
                            </IconButton>
                        </Avatar>
                        <TextField
                            sx={{ display: !isEditMode ? "none" : "block" }}
                            name="twitterUrl"
                            onChange={handleChange}
                            value={editValue.twitterUrl}
                            disabled={!isEditMode}
                            variant="standard"
                            InputProps={{
                                disableUnderline: true,
                            }}
                        />
                    </Stack>
                    <Stack direction="row">
                        <Avatar sx={{ m: 0.5 }}>
                            <IconButton
                                href={
                                    user.customUrl == "" ? "" : user.customUrl
                                }
                                disabled={user.customUrl == ""}
                            >
                                <AttachFileIcon />
                            </IconButton>
                        </Avatar>
                        <TextField
                            sx={{ display: !isEditMode ? "none" : "block" }}
                            name="customUrl"
                            onChange={handleChange}
                            value={editValue.customUrl}
                            disabled={!isEditMode}
                            variant="standard"
                            InputProps={{
                                disableUnderline: true,
                            }}
                        />
                    </Stack>
                </Stack>
            </Stack>
            <List>
                <ListItem disablePadding>
                    <ListItemAvatar>
                        <Avatar>
                            <WorkIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="職業"
                        secondary={
                            <TextField
                                name="job"
                                onChange={handleChange}
                                value={editValue.job}
                                disabled={!isEditMode}
                                variant="standard"
                                InputProps={{
                                    disableUnderline: true,
                                }}
                            />
                        }
                    />
                </ListItem>

                <ListItem disablePadding>
                    <ListItemAvatar>
                        <Avatar></Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="年齢"
                        secondary={
                            <TextField
                                name="age"
                                onChange={handleChange}
                                value={editValue.age}
                                disabled={!isEditMode}
                                variant="standard"
                                InputProps={{
                                    disableUnderline: true,
                                }}
                            />
                        }
                    />
                </ListItem>

                <ListItem disablePadding>
                    <ListItemAvatar>
                        <Avatar>
                            <CodeIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="主要言語"
                        secondary={
                            <TextField
                                name="language"
                                onChange={handleChange}
                                value={editValue.language}
                                disabled={!isEditMode}
                                variant="standard"
                                InputProps={{
                                    disableUnderline: true,
                                }}
                            />
                        }
                    />
                </ListItem>

                <ListItem disablePadding>
                    <ListItemAvatar>
                        <Avatar>
                            <ComputerIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="開発歴"
                        secondary={
                            <TextField
                                name="developmentAge"
                                onChange={handleChange}
                                value={editValue.developmentAge}
                                disabled={!isEditMode}
                                variant="standard"
                                InputProps={{
                                    disableUnderline: true,
                                }}
                            />
                        }
                    />
                </ListItem>

                <ListItem disablePadding>
                    <ListItemAvatar sx={{ alignSelf: "start", mt: 2 }}>
                        <Box>
                            <Avatar></Avatar>
                        </Box>
                    </ListItemAvatar>
                    <ListItemText
                        primary="自己紹介"
                        secondary={
                            <TextField
                                onChange={handleChange}
                                value={editValue.selfIntroduction}
                                multiline
                                name="selfIntroduction"
                                sx={{
                                    width: "500px",
                                    maxHeight: "170px",
                                    overflow: "auto",
                                }}
                                disabled={!isEditMode}
                                variant="standard"
                                InputProps={{
                                    disableUnderline: true,
                                }}
                            />
                        }
                    />
                </ListItem>
            </List>
        </Stack>
    );
}
