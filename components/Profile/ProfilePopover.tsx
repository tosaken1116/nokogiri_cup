import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import {
    Box,
    CircularProgress,
    IconButton,
    Paper,
    Popover,
    Stack,
    Typography,
} from "@mui/material";
import Link from "next/link";
import { useUserPopoverProps } from "../../Hooks/hooks";
import { ArticleProps, ProfilePopOverProps } from "../../Types/type";
import Icon from "../common/Icon";
export function ProfilePopOver({
    anchorElement,
    closePopOver,
    authorId,
}: ProfilePopOverProps & Pick<ArticleProps, "authorId">) {
    const { user, isLoading } = useUserPopoverProps(authorId ?? "");
    if (isLoading) {
        return <CircularProgress />;
    }
    return (
        <Popover
            open={Boolean(anchorElement)}
            onClose={closePopOver}
            anchorEl={anchorElement}
            anchorOrigin={{
                vertical: "top",
                horizontal: "left",
            }}
            transformOrigin={{
                vertical: "bottom",
                horizontal: "left",
            }}
        >
            <Box sx={{ position: "relative" }}>
                <IconButton
                    onClick={closePopOver}
                    sx={{
                        position: "absolute",
                        right: 0,
                        top: 0,
                    }}
                >
                    <HighlightOffOutlinedIcon />
                </IconButton>
                <Link href="./Login">
                    <Paper sx={{ width: "240px", height: "140px" }}>
                        <Stack direction="row" p={2} spacing={2}>
                            <Icon iconPath={user?.iconPath} size="m" />
                            <Stack spacing={1}>
                                <Typography variant="h6">
                                    {user?.userName}
                                </Typography>
                                <Stack spacing={0.5} pl={0.5}>
                                    <Typography variant="caption">
                                        使用言語:{user?.language}
                                    </Typography>
                                    <Typography variant="caption">
                                        開発歴:{user?.developmentAge}
                                    </Typography>
                                    <Typography variant="caption">
                                        職業:{user?.job}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Paper>
                </Link>
            </Box>
        </Popover>
    );
}
