import { CircularProgress, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useState } from "react";
import { useUserStatus } from "../../Hooks/hooks";
import Icon from "../common/Icon";
import { ToProfileIcon } from "../common/Icon/ToProfileIcon";
import { ProfilePopOver } from "../Profile/ProfilePopover";

const status = 1;
export default function PortfolioHeader() {
    const router = useRouter();
    const [anchorElement, setAnchorElement] =
        useState<HTMLButtonElement | null>(null);
    const userId = String(router.query.userId);
    const { user, isLoading } = useUserStatus(userId);
    if (isLoading) {
        return <CircularProgress />;
    }
    return (
        <Box sx={{ height: "12vh" }}>
            <AppBar position="static" sx={{ bgcolor: "#EEEEEE" }}>
                <Toolbar>
                    <Stack direction="row" sx={{ flexGrow: 1 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                color: "black",
                            }}
                        >
                            {user.userName}さんのポートフォリオ
                        </Typography>
                        <Box>
                            <Button
                                onClick={(
                                    e: React.MouseEvent<HTMLButtonElement>
                                ) => setAnchorElement(e.currentTarget)}
                            >
                                <Icon iconPath={user.iconPath} size="s" />
                            </Button>
                            <ProfilePopOver
                                anchorElement={anchorElement}
                                closePopOver={() => setAnchorElement(null)}
                                authorId={userId}
                            />
                        </Box>
                        <Box flexGrow={1} />
                        <Button
                            href={`/Profile/${userId}`}
                            startIcon={<ToProfileIcon />}
                        >
                            プロフィールへ
                        </Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
