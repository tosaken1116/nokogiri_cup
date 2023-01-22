import { Box } from "@mui/material";
import { NowPageProps } from "../../Types/type";
import Profile from "./Profile";
import Search from "./Search";
export default function NowPage({ nowPage }: Pick<NowPageProps, "nowPage">) {
    return (
        <Box>
            {nowPage == "profile" ? (
                <Profile />
            ) : nowPage == "search" ? (
                <Search nowPage={nowPage} />
            ) : (
                <></>
            )}
        </Box>
    );
}
