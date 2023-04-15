import { Box, IconButton, Stack, useMediaQuery } from "@mui/material";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import { useRouter } from "next/router";
import { useState } from "react";
import { useLocalStorage } from "../../Hooks/hooks";
import AddArticle from "../Article/AddArticle";
import Header from "../Header/Header";
import BottomBar from "./BottomBar";
import Sidebar from "./Sidebar";

export type LayoutProps = {
    children: React.ReactNode;
};
export default function Layout({ children }: LayoutProps) {
    const router = useRouter();
    const matches = useMediaQuery("(min-width: 800px)");
    const { getLocalStorage } = useLocalStorage();
    const userId = getLocalStorage("userId");
    const [isAddArticleMode, setIsAddArticleMode] = useState(false);
    return (
        <Box sx={{ position: "relative" }}>
            <Box
                sx={{
                    position: "absolute",
                    right: "5%",
                    bottom: "5%",
                    zIndex: 10000,
                    backgroundColor: "#ffaa44",
                    borderRadius: "50%",
                    display:
                        isAddArticleMode ||
                        router.asPath != "/Home" ||
                        !Boolean(userId)
                            ? "none"
                            : "block",
                }}
            >
                <IconButton
                    sx={{
                        p: 2,
                    }}
                    onClick={() => setIsAddArticleMode(true)}
                >
                    <SpeedDialIcon
                        sx={{
                            color: "white",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    />
                </IconButton>
            </Box>

            <Stack>
                <Header />
                <Stack direction="row">
                    {matches && <Sidebar />}
                    <Box flexGrow={1}>{children}</Box>
                    <Box position="absolute">
                        <AddArticle
                            isAddArticleMode={isAddArticleMode}
                            closeAddArticleMode={() =>
                                setIsAddArticleMode(false)
                            }
                        />
                    </Box>
                </Stack>
            </Stack>
            {!matches && <BottomBar />}
        </Box>
    );
}
