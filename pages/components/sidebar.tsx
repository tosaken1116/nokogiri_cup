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
import { Grid, IconButton, Paper } from "@mui/material";
import { NowPageProps } from "../type";
export const Sidebar = ({ nowPage, setNowPage }: NowPageProps) => {
    return (
        <Paper sx={{ width: "5vw" }}>
            <Grid
                container
                spacing={5}
                sx={{
                    height: "95vh",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Grid item>
                    <IconButton onClick={() => setNowPage("home")}>
                        {nowPage == "home" ? (
                            <HomeIcon />
                        ) : (
                            <HomeOutlinedIcon />
                        )}
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton onClick={() => setNowPage("search")}>
                        {nowPage == "search" ? (
                            <SearchIcon />
                        ) : (
                            <SearchOutlinedIcon />
                        )}
                    </IconButton>
                </Grid>

                <Grid item>
                    <IconButton onClick={() => setNowPage("profile")}>
                        {nowPage == "profile" ? (
                            <AccountCircleIcon />
                        ) : (
                            <AccountCircleOutlinedIcon />
                        )}
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton onClick={() => setNowPage("notification")}>
                        {nowPage == "notification" ? (
                            <NotificationsIcon />
                        ) : (
                            <NotificationsNoneOutlinedIcon />
                        )}
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton onClick={() => setNowPage("comment")}>
                        {nowPage == "comment" ? (
                            <InsertCommentIcon />
                        ) : (
                            <InsertCommentOutlinedIcon />
                        )}
                    </IconButton>
                </Grid>
            </Grid>
        </Paper>
    );
};
