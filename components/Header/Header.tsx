import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useRecoilState } from "recoil";
import { useAuthentication } from "../../Hooks/hooks";
import { userStatus } from "../../state/state";

export default function Header() {
    const [userState] = useRecoilState(userStatus);
    const { logout, login } = useAuthentication();
    console.log(userState);
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
                    {!userState.isLogin ? (
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
                            {/* <Typography>{userState.userName}</Typography> */}
                            <Button onClick={() => logout()}>log out</Button>
                        </Stack>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
