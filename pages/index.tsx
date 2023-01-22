import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, Button, Stack } from "@mui/material";
import Link from "next/link";

import { useState } from "react";
import Header from "./components/Header";
import NowPage from "./components/NowPage";
import ProfilePopOver from "./components/ProfilePopover";
import Sidebar from "./components/sidebar";
export default function Home() {
    const [nowPage, setNowPage] = useState("home");
    const [anchorElement, setAnchorElement] =
        useState<HTMLButtonElement | null>(null);
    const handleOpenProfilePopOver = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        setAnchorElement(event.currentTarget);
    };
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
                <Button onClick={handleOpenProfilePopOver}>test</Button>
                <ProfilePopOver
                    anchorElement={anchorElement}
                    closePopOver={() => setAnchorElement(null)}
                />
            </Stack>
        </Box>
    );
}
