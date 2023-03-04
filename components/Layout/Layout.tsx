import AddIcon from "@mui/icons-material/Add";
import { Box, Stack } from "@mui/material";
import Link from "next/link";
import Header from "../Header/Header";
import Sidebar from "./Sidebar";
type LayoutProps = {
    children: React.ReactNode;
};
export default function Layout({ children }: LayoutProps) {
    return (
        <Box sx={{ position: "relative" }}>
            <Link
                href="./AddArticle"
                className="absolute right-10 top-20 scale-150 rounded-full border-2 w-[36px] h-[36px] border-black text-center"
            >
                <AddIcon />
            </Link>
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
