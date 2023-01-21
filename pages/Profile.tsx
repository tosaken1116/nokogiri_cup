import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import ComputerIcon from "@mui/icons-material/Computer";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import React from "react";

export default function Profile() {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ m: 2 }}>
        <Avatar sx={{ height: 150, width: 150 }}>
          <WorkIcon />
        </Avatar>
        <Box sx={{ mt: 2, display: "flex" }}>
          <Avatar sx={{ m: 0.5 }}>
            <GitHubIcon />
          </Avatar>
          <Avatar sx={{ m: 0.5 }}>
            <TwitterIcon />
          </Avatar>
          <Avatar sx={{ m: 0.5 }}>
            <AttachFileIcon />
          </Avatar>
        </Box>
      </Box>
      <List>
        <ListItem disablePadding>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="職業" secondary="Jan 9, 2014" />
        </ListItem>

        <ListItem disablePadding>
          <ListItemAvatar>
            <Avatar></Avatar>
          </ListItemAvatar>
          <ListItemText primary="年齢" secondary="Jan 9, 2014" />
        </ListItem>

        <ListItem disablePadding>
          <ListItemAvatar>
            <Avatar>
              <CodeIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="主要言語" secondary="Jan 9, 2014" />
        </ListItem>

        <ListItem disablePadding>
          <ListItemAvatar>
            <Avatar>
              <ComputerIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="開発歴" secondary="Jan 9, 2014" />
        </ListItem>

        <ListItem disablePadding>
          <ListItemAvatar>
            <Avatar></Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="自己紹介"
            sx={{ height: 100, width: 100 }}
            secondary={
              <React.Fragment>
                {
                  " — Do you have Paris recommendati,,k,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,ons? Have you ever…"
                }
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </Box>
  );
}
