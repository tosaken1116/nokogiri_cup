import { useAuthentication } from "./hooks";

import { Box, Stack } from "@mui/material";
import { useState } from "react";
import Header from "./components/Header";
import NowPage from "./components/NowPage";
import { Sidebar } from "./components/sidebar";

export default function Home() {
    const [nowPage, setNowPage] = useState("home");
    return (
        <Box>
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
