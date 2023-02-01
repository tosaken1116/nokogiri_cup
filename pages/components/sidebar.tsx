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
import { Box, Grid, IconButton, Paper, Slide } from "@mui/material";
import { useState } from "react";
import { NowPageProps } from "../../Types/type";
export default function Sidebar({ nowPage, setNowPage }: NowPageProps) {
    const [isHover, setIsHover] = useState(false);
    return (
        <Box
            sx={{
                height: "95vh",
                width: "60px",
                transitionDelay: "300",
                msTransitionDelay: "2000",
                animationDuration: "300",
                transition: "width 1s ease-in-out 0s",
            }}
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <Slide direction="right" in={isHover}>
                <Paper>
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
                            <IconButton
                                onClick={() => setNowPage("notification")}
                            >
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
            </Slide>
        </Box>
    );
}
