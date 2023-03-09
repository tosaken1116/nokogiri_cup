import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, IconButton, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import AddArticle from "../Article/AddArticle";
import Header from "../Header/Header";
import Sidebar from "./Sidebar";
export type LayoutProps = {
    children: React.ReactNode;
};
export default function Layout({ children }: LayoutProps) {
    const router = useRouter();
    const [isAddArticleMode, setIsAddArticleMode] = useState(false);
    return (
        <Box sx={{ position: "relative" }}>
            <IconButton
                onClick={() => setIsAddArticleMode(true)}
                sx={{
                    position: "absolute",
                    right: "5%",
                    bottom: "10%",
                    display: isAddArticleMode ? "none" : "block",
                }}
            >
                <AddCircleIcon fontSize="large" />
            </IconButton>

            <Stack>
                <Header />
                <Stack direction="row">
                    <Sidebar />
                    <Box flexGrow={2}>{children}</Box>
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
        </Box>
    );
}
