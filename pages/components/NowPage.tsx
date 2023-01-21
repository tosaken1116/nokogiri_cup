import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box } from "@mui/material";
import Link from "next/link";
import { NowPageProps } from "../../Types/type";
import Profile from "./Profile";
export default function NowPage({ nowPage }: Pick<NowPageProps, "nowPage">) {
    return (
        <Box sx={{ position: "relative" }}>
            {nowPage == "profile" ? <Profile /> : <></>}
        </Box>
    );
}
