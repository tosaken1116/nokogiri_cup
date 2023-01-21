import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useAuthentication } from "./hooks";
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
            <Typography variant="h3"> Title</Typography>
            <Box
                sx={{
                    display: "flex",
                }}
            >
                <Button
                    onClick={() => {
                        login();
                        if (idToken != "") {
                            router.push("./");
                        }
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
                        console.log("sign in");
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
