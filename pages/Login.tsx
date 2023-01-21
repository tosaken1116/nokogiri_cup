import { gql } from "@apollo/client";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { green, lightGreen } from "@mui/material/colors";
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
              pathname:"./",
              // query: { username: username}
            });
          }}
          variant="contained"
          href="#contaeined-buttons"
          sx={{
            m: 2,
            bgcolor: "#81c784",
            "&:hover": {
              backgroundColor: "Green",
            },
          }}
        >
          Sign up
        </Button>

        <Button
          onClick={() => {
            console.log("sign in");
            router.push({
              pathname:"./",
              // query: { username: username}
            });
          }}
          variant="contained"
          href="#contained-buttons"
          sx={{
            m: 2,
            bgcolor: "#81c784",
            "&:hover": {
              backgroundColor: "Green",
            },
          }}
        >
          Sign in
        </Button>
      </Box>
    </Box>
  );
}
