import Header from "./components/head";
import Image from "next/image";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { ApolloProvider } from "@apollo/client";

import { useContext, useState, useRef, useEffect } from "react";

// eslint-disable-next-line react-hooks/rules-of-hooks
const companies = ["Google", "Mozilla", "Microsoft"];
const browsers: { name: string; url: string }[] = [
  { name: "Chrome", url: "https://chromeenterprise.google" },
  { name: "Firefox", url: "https://www.mozilla.org/ja/firefox/new/" },
  { name: "Edge", url: "https://www.microsoft.com/ja-jp/edge" },
];

const listItems = companies.map((companied) => (
  // eslint-disable-next-line react/jsx-key
  <li>{companied}</li>
));

const NotionPage = () => {
  return (
    <div>
      <main>
        <Header />
        <Box component="span" sx={{ width: 1, bgcolor: "#EEEEEE" }}>
          <Typography
            align="center"
            variant="h5"
            sx={{
              color: "#333333",
              bgcolor: "#DDDDDD",
              textshadow: "1px 1px 3px",
            }}
          >
            Notice All
          </Typography>
        </Box>
        <Box sx={{ width: 1, height: 200, bgcolor: "white" }}>
          <Typography variant="h6"></Typography>
        </Box>

        <ul>{listItems}</ul>
      </main>
    </div>
  );
};

export default NotionPage;
