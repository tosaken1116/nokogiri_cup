import { Box } from "@mui/material";
import { NowPageProps } from "../../Types/type";
import { Notification } from "./Notifications";
import Profile from "./Profile";
import Search from "./Search";
export default function NowPage({ nowPage }: Pick<NowPageProps, "nowPage">) {
    return (
        <Box>
            {nowPage == "profile" ? (
                <Profile />
            ) : nowPage == "search" ? (
                <Search nowPage={nowPage} />
            ) : nowPage == "notification" ? (
                <Notification />
            ) : (
                <></>
            )}
        </Box>
    );
}
