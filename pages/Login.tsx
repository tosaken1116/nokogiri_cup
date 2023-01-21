import {
  Box,
  Button,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
export default function Login() {
  const router = useRouter();
  return (
    <Box
      component="main"
      maxWidth="xs"
      sx={{
        marginTop: 25,
        height: 100,
        display: "flex",
        flexDirection: "column",
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
            console.log("sign up");
            router.push({
              pathname: "./",
              // query: { username: username}
            });
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
