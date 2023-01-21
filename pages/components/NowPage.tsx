import { Box } from "@mui/material";
import { NowPageProps } from "../../Types/type";
import Portfolio from "../Portfolio";
import Profile from "./Profile";

export default function NowPage({ nowPage }: Pick<NowPageProps, "nowPage">) {
    return( 
        <Box>
        {/* {nowPage == "profile" ? <Profile /> : <></>} */}
        <Portfolio />
        </Box>
    )
}
