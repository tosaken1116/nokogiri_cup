import HomeIcon from "@mui/icons-material/Home";
import { Avatar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useState } from "react";
import ProfilePopOver from "../Profile/ProfilePopover";

const status = 1;
export default function PortfolioHeader() {
    const [anchorElement, setAnchorElement] =
        useState<HTMLButtonElement | null>(null);

    const handleOpenProfilePopOver = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        setAnchorElement(event.currentTarget);
    };
    return (
        <Box sx={{ height: "12vh" }}>
            <AppBar position="static" sx={{ bgcolor: "#EEEEEE" }}>
                <Toolbar>
                    <Box sx={{ display: "flex" }}>
                        <Typography
                            variant="h6"
                            sx={{
                                color: "black",
                                width: "-webkit-fill-available",
                            }}
                        >
                            {/* name */}さんのポートフォリオ
                        </Typography>
                        <Avatar sx={{ ml: 2 }}>
                            <Button sx={{}} onClick={handleOpenProfilePopOver}>
                                \
                            </Button>
                            <ProfilePopOver
                                anchorElement={anchorElement}
                                closePopOver={() => setAnchorElement(null)}
                            />
                        </Avatar>
                    </Box>
                    <Box flexGrow={1}></Box>
                    <Link href="../">
                        <HomeIcon color="primary" />
                    </Link>
                    {status ? (
                        <Stack
                            direction="row"
                            spacing={2}
                            sx={{ alignItems: "center" }}
                        >
                            <Button
                                variant="contained"
                                sx={{
                                    color: "grey",
                                    height: "8vh",
                                    ":hover": { background: "grey" },
                                }}
                            >
                                並び替え
                            </Button>
                        </Stack>
                    ) : (
                        <Button variant="contained">
                            <Typography sx={{ flexGrow: 1, color: "black" }}>
                                Username
                            </Typography>
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
