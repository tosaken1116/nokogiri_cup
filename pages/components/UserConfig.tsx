import AttachFileIcon from "@mui/icons-material/AttachFile";
import CodeIcon from "@mui/icons-material/Code";
import ComputerIcon from "@mui/icons-material/Computer";
import GitHubIcon from "@mui/icons-material/GitHub";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import TwitterIcon from "@mui/icons-material/Twitter";
import WorkIcon from "@mui/icons-material/Work";
import {
    Avatar,
    Box,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    TextField,
} from "@mui/material";
import React, { useState } from "react";


export default function Profile() {
  const [work,setWork] = useState<string>("")
  const [old,setOld] = useState<string>("")
  const [lang,setLang] = useState<string>("")
  const [hstr,setHstr] = useState<string>("")
  const [self,setSelf] = useState<string>("")

  return (
        <Box sx={{ display: "flex" }}>
            <Box sx={{ m: 2 }}>
                <Avatar sx={{ height: 150, width: 150 }}>
                    <InsertPhotoIcon />
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
                    <TextField onChange={(e)=> setWork(e.target.value)} id="standard-basic" label="職業" variant="standard" />
                </ListItem>

                <ListItem disablePadding>
                    <ListItemAvatar>
                        <Avatar></Avatar>
                    </ListItemAvatar>
                    <TextField onChange={(e)=> setOld(e.target.value)} id="standard-basic" label="年齢" variant="standard" />
                </ListItem>

                <ListItem disablePadding>
                    <ListItemAvatar>
                        <Avatar>
                            <CodeIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <TextField onChange={(e)=> setLang(e.target.value)} id="Program language" label="主要言語" variant="standard" />
                </ListItem>

                <ListItem disablePadding>
                    <ListItemAvatar>
                        <Avatar>
                            <ComputerIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <TextField onChange={(e)=> setHstr(e.target.value)} id="standard-basic" label="開発歴" variant="standard" />
                </ListItem>

                <ListItem disablePadding>
                    <ListItemAvatar>
                        <Avatar></Avatar>
                    </ListItemAvatar>
                    <TextField
          onChange={(e)=> setSelf(e.target.value)}
          id="standard-multiline-static"
          label="自己紹介"
          multiline
          rows={4}
          variant="standard" />
                    {/* sx={{ height: 100, width: 100 }} */}
                </ListItem>
            </List>
        </Box>
    );
}
