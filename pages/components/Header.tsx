import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const status = 1;
export default function Header() {
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
                            Surportforio仮
                        </Typography>
                    </Box>
                    <Box flexGrow={1}></Box>
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
                                    padding: 0,
                                }}
                            >
                                <Link href="./Login">signin</Link>
                            </Button>
                            <Button
                                variant="contained"
                                sx={{
                                    color: "grey",
                                    height: "8vh",
                                    ":hover": { background: "grey" },
                                }}
                            >
                                <Link href="./Login">signup</Link>
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
