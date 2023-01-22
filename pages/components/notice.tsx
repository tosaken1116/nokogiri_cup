import { ApolloProvider } from "@apollo/client";
import Noti from "./noti";
import { Box, Typography, List } from "@mui/material";
import { useContext, useState, useRef, useEffect } from "react";
import Header from "./Header";

//  NotificationRowProps.map((notion,index) => (
//   // eslint-disable-next-line react/jsx-key
//   <li>{notion}</li>
// ));

const NotionPage = () => {
  return (
    <div>
      <main>
        <Header />
        <Box component="span" sx={{ bgcolor: "#EEEEEE" }}>
          <Typography
            align="center"
            variant="h5"
            sx={{
              color: "#333333",
              bgcolor: "#EEEEEE",
              textshadow: "1px 1px 3px",
            }}
          >
            Notice All
          </Typography>
        </Box>
        <Box sx={{ width: 1, height: 200, bgcolor: "white" }}>
          <Typography variant="h6">
            <List>
              <Noti />
            </List>
          </Typography>
        </Box>
      </main>
    </div>
  );
};

export default NotionPage;
