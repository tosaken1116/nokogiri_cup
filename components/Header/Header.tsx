import { Paper } from "@mui/material";
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

export default function Header() {
    const { logout, login } = useAuthentication();
    const { getLocalStorage } = useLocalStorage();
    const userId = getLocalStorage("userId");
    const { user, isLoading } = useUserStatus(userId ?? "");
    if (isLoading) {
        return <></>;
    }
    return (
        <Box sx={{ height: "12vh" }}>
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
                    {!user?.userName ? (
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
                            <Paper sx={{ padding: 2 }}>
                                <Typography>{user?.userName}</Typography>
                            </Paper>
                            <Button onClick={() => logout()}>log out</Button>
                        </Stack>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
