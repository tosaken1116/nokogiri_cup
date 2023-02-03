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
import { Box, Grid, Paper, Slide } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
export default function Sidebar() {
    const router = useRouter();
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
                            <Link href="Home">
                                {router.pathname == "/Home" ? (
                                    <HomeIcon />
                                ) : (
                                    <HomeOutlinedIcon />
                                )}
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="Search">
                                {router.pathname == "/Search" ? (
                                    <SearchIcon />
                                ) : (
                                    <SearchOutlinedIcon />
                                )}
                            </Link>
                        </Grid>

                        <Grid item>
                            <Link href="/Profile">
                                {router.pathname == "/Profile" ? (
                                    <AccountCircleIcon />
                                ) : (
                                    <AccountCircleOutlinedIcon />
                                )}
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/Notifications">
                                {router.pathname == "/Notifications" ? (
                                    <NotificationsIcon />
                                ) : (
                                    <NotificationsNoneOutlinedIcon />
                                )}
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="./Comment">
                                {router.pathname == "/Comment" ? (
                                    <InsertCommentIcon />
                                ) : (
                                    <InsertCommentOutlinedIcon />
                                )}
                            </Link>
                        </Grid>
                    </Grid>
                </Paper>
            </Slide>
        </Box>
    );
}
