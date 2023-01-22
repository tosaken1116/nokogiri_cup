import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, Stack } from "@mui/material";
import Link from "next/link";

import { useState } from "react";
import Header from "./components/Header";
import NowPage from "./components/NowPage";
import Sidebar from "./components/sidebar";
export default function Home() {
    const [nowPage, setNowPage] = useState("home");
    return (
        <Box sx={{ position: "relative" }}>
            <Link
                href="./addArticle"
                className="absolute bottom-10 right-10 scale-150"
            >
                <AddCircleIcon fontSize="large" />
            </Link>
            <Stack>
                <Header />
                <Stack direction="row">
                    <Sidebar nowPage={nowPage} setNowPage={setNowPage} />
                    <NowPage nowPage={nowPage}></NowPage>
                </Stack>
            </Stack>
        </Box>
    );
}
