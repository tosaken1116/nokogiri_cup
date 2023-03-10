import { CircularProgress, Paper } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
    useAuthentication,
    useLocalStorage,
    useUserStatus,
} from "../../Hooks/hooks";
import Icon from "../common/Icon";

export default function Header() {
    const { logout, login } = useAuthentication();
    const { getLocalStorage } = useLocalStorage();
    const userId = getLocalStorage("userId");
    const { user, isLoading } = useUserStatus({
        userId: userId ?? "",
        loginRequired: true,
    });

    return (
        <Box sx={{ height: "8vh" }}>
            <AppBar position="static" sx={{ bgcolor: "#EEEEEE" }}>
                <Toolbar>
                    <Box>
                        <Typography
                            variant="h6"
                            sx={{
                                color: "black",
                                width: "-webkit-fill-available",
                            }}
                        >
                            Supportfolio
                        </Typography>
                    </Box>
                    <Box flexGrow={1}></Box>
                    {isLoading ? (
                        <CircularProgress />
                    ) : !user?.userName ? (
                        <Stack
                            direction="row"
                            spacing={2}
                            sx={{ alignItems: "center" }}
                        >
                            <Button variant="contained" onClick={() => login()}>
                                log in
                            </Button>
                        </Stack>
                    ) : (
                        <Stack direction="row">
                            <Button
                                sx={{
                                    textTransform: "none",
                                }}
                                href="/Profile/my"
                            >
                                <Paper sx={{ paddingX: 2, paddingY: 1 }}>
                                    <Stack direction="row">
                                        <Icon
                                            iconPath={user?.iconPath}
                                            size="m"
                                        ></Icon>
                                        <Typography>
                                            {user?.userName}
                                        </Typography>
                                    </Stack>
                                </Paper>
                            </Button>
                            <Button onClick={() => logout()}>log out</Button>
                        </Stack>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
