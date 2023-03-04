import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, IconButton, Stack } from "@mui/material";
import { useRouter } from "next/router";
import Header from "../Header/Header";
import Sidebar from "./Sidebar";
type LayoutProps = {
    children: React.ReactNode;
};
export default function Layout({ children }: LayoutProps) {
    const router = useRouter();
    console.log(router.pathname);
    return (
        <Box sx={{ position: "relative" }}>
            <IconButton
                href="./AddArticle"
                sx={{
                    position: "absolute",
                    right: "5%",
                    bottom: "10%",
                    display:
                        router.pathname === "/AddArticle" ? "none" : "block",
                }}
            >
                <AddCircleIcon fontSize="large" />
            </IconButton>

            <Stack>
                <Header></Header>
                <Stack direction="row">
                    <Sidebar></Sidebar>
                    <Box flexGrow={2}>{children}</Box>
                </Stack>
            </Stack>
        </Box>
    );
}
