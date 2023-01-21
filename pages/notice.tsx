import Header from "./components/head";
import Image from "next/image";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { ApolloProvider } from "@apollo/client";

const NotionPage = () => {
  return (
    <div>
      <main>
        <Header />
      </main>
    </div>
  );
};

export default NotionPage;
