import { ApolloProvider } from "@apollo/client";
import { Box, Typography, List } from "@mui/material";
import { useContext, useState, useRef, useEffect } from "react";
import Header from "./Header";

//  NotificationRowProps.map((notion,index) => (
//   // eslint-disable-next-line react/jsx-key
//   <li>{notion}</li>
// ));
export type NotificationRowProps = {
  name: string;
  // icon:string
  notine: string;
};

const App = () => {
  const notification = [
    { name: "salto", notine: "like" },
    { name: "yamada", notine: "share" },
    { name: "suzuki", notine: "like" },
  ];
  return notification.map((notice, index) => {
    // indexの追加
    return <NotionPage name={notice.name} notine={notice.notine} key={index} />; // keyの追加
  }); // keyの追加
};

const NotionPage = (props: NotificationRowProps) => {
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
            <ul>
              <li className="border-2 border-y-gray-300 text-center">
                {props.name}は{props.notine}を与えました！
              </li>
            </ul>
          </Typography>
        </Box>
      </main>
    </div>
  );
};

export default App;
