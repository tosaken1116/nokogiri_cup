import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useAuthentication } from "../Hooks/hooks";
export default function Login() {
    const { login, logout, idToken } = useAuthentication();

    const router = useRouter();
    return (
        <Box
            component="main"
            maxWidth="xs"
            sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Typography variant="h3"> Supportfolio</Typography>
            <Box
                sx={{
                    display: "flex",
                }}
            >
                <Button
                    onClick={() => {
                        login();
                        router.push("./");
                    }}
                    variant="contained"
                    href="#contaeined-buttons"
                    sx={{
                        m: 2,
                    }}
                >
                    Sign up
                </Button>

                <Button
                    onClick={() => {
                        router.push({
                            pathname: "./",
                            // query: { username: username}
                        });
                    }}
                    variant="contained"
                    href="#contained-buttons"
                    sx={{
                        m: 2,
                    }}
                >
                    Sign in
                </Button>
            </Box>
        </Box>
    );
}
