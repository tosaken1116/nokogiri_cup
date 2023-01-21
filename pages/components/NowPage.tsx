import { Box } from "@mui/material";
import { NowPageProps } from "../../Types/type";
import Profile from "./Profile";

export default function NowPage({ nowPage }: Pick<NowPageProps, "nowPage">) {
    return <Box>{nowPage == "profile" ? <Profile /> : <></>}</Box>;
}
