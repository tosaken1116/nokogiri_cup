import Header from "./components/head";
import Image from "next/image";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { ApolloProvider } from "@apollo/client";
import SvgIcon from "@mui/material/SvgIcon";

const NotionPage = () => {
  return (
    <div>
      <main>
        <Header />
        <Box component="span" sx={{ width: 1, bgcolor: "#EEEEEE" }}>
          <Typography
            align="center"
            sx={{
              color: "#333333",
              bgcolor: "#DDDDDD",
              textshadow: "1px 1px 3px",
            }}
          >
            Notice All
          </Typography>
        </Box>
        <Box
          component="span"
          sx={{ width: 1, height: 500, bgcolor: "#EEEEEE" }}
        >
          aaaaaa
        </Box>
      </main>
    </div>
  );
};

export default NotionPage;
