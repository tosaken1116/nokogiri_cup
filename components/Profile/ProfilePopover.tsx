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
import { useUserPopoverProps } from "../../Hooks/hooks";
import { ArticleProps, ProfilePopOverProps } from "../../Types/type";
import Icon from "../common/Icon";
import { ToPortfolioIcon } from "../common/Icon/ToPortfolioIcon";
import { ToProfileIcon } from "../common/Icon/ToProfileIcon";
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
                <Paper sx={{ width: "240px", height: "140px" }}>
                    <Stack direction="row" p={2} spacing={2}>
                        <Stack spacing={0.5}>
                            <Icon iconPath={user?.iconPath} size="m" />
                            <Stack spacing={0}>
                                <IconButton href={`/Portfolio/${authorId}`}>
                                    <ToPortfolioIcon />
                                </IconButton>
                                <IconButton href={`/Profile/${authorId}`}>
                                    <ToProfileIcon />
                                </IconButton>
                            </Stack>
                        </Stack>
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
            </Box>
        </Popover>
    );
}
