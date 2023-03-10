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
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useRouter } from "next/router";
export default function BottomBar() {
    const router = useRouter();
    return (
        <BottomNavigation
            sx={{ position: "fixed", bottom: 0, width: "100%" }}
            showLabels
            value="Home"
        >
            <BottomNavigationAction
                label="Home"
                icon={
                    router.pathname == "/Home" ? (
                        <HomeIcon />
                    ) : (
                        <HomeOutlinedIcon />
                    )
                }
                href="/Home"
            />
            <BottomNavigationAction
                label="Search"
                icon={
                    router.pathname == "/Search" ? (
                        <SearchIcon />
                    ) : (
                        <SearchOutlinedIcon />
                    )
                }
                href="/Search"
            />
            <BottomNavigationAction
                label="Profile"
                icon={
                    router.pathname == "/Profile/[id]" ? (
                        <AccountCircleIcon />
                    ) : (
                        <AccountCircleOutlinedIcon />
                    )
                }
                href="/Profile/my"
            />
            <BottomNavigationAction
                disabled
                label="Notifications"
                icon={
                    router.pathname == "/Notifications" ? (
                        <NotificationsIcon />
                    ) : (
                        <NotificationsNoneOutlinedIcon />
                    )
                }
                href="/Notifications"
            />
            <BottomNavigationAction
                label="DM"
                disabled
                icon={
                    router.pathname == "/Comments" ? (
                        <InsertCommentIcon />
                    ) : (
                        <InsertCommentOutlinedIcon />
                    )
                }
                href="/Comments"
            />
        </BottomNavigation>
    );
}
