import { Box, Stack } from "@mui/material";
import { useState } from "react";
import Header from "./components/Header";
import NowPage from "./components/NowPage";
import Sidebar from "./components/sidebar";
export default function Home() {
    const [nowPage, setNowPage] = useState("home");
    // const [anchorElement, setAnchorElement] =
    //     useState<HTMLButtonElement | null>(null);
    // const handleOpenProfilePopOver = (
    //     event: React.MouseEvent<HTMLButtonElement>
    // ) => {
    //     setAnchorElement(event.currentTarget);
    // };
    return (
        <Box>
            <Stack>
                <Header />
                <Stack direction="row">
                    <Sidebar nowPage={nowPage} setNowPage={setNowPage} />
                    <NowPage nowPage={nowPage}></NowPage>
                </Stack>
                {/* <Button onClick={handleOpenProfilePopOver}>test</Button>
                <ProfilePopOver
                    anchorElement={anchorElement}
                    closePopOver={() => setAnchorElement(null)}
                /> */}
            </Stack>
        </Box>
    );
}
