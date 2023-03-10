import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchIcon from "@mui/icons-material/Search";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { IconButton, Paper, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useLocalStorage } from "../../Hooks/hooks";
export default function Sidebar() {
    const router = useRouter();
    const { getLocalStorage } = useLocalStorage();
    return (
        <Paper>
            <Stack
                direction="column"
                sx={{
                    height: "calc(100vh - 9vh)",
                    width: "80px",
                    flexShrink: 1,
                    alignItems: "center",
                    justifyContent: "space-around",
                }}
            >
                <IconButton href="/Home">
                    {router.pathname == "/Home" ? (
                        <HomeIcon />
                    ) : (
                        <HomeOutlinedIcon />
                    )}
                </IconButton>
                <IconButton href="/Search">
                    {router.pathname == "/Search" ? (
                        <SearchIcon />
                    ) : (
                        <SearchOutlinedIcon />
                    )}
                </IconButton>

                <IconButton
                    href="/Profile/my"
                    disabled={!Boolean(getLocalStorage("authToken"))}
                >
                    {router.pathname == "/Profile/[id]" ? (
                        <AccountCircleIcon />
                    ) : (
                        <AccountCircleOutlinedIcon />
                    )}
                </IconButton>
                <IconButton href="/Notifications">
                    {router.pathname == "/Notifications" ? (
                        <NotificationsIcon />
                    ) : (
                        <NotificationsNoneOutlinedIcon />
                    )}
                </IconButton>
                <IconButton href="/Comments">
                    {router.pathname == "/Comments" ? (
                        <InsertCommentIcon />
                    ) : (
                        <InsertCommentOutlinedIcon />
                    )}
                </IconButton>
            </Stack>
        </Paper>
    );
}
