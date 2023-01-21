import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Grid,
    TextField,
  } from "@mui/material";
  import { useState } from "react";
  
  //testdata
  const userName = "user"
  const status = 1;
  export default function AddArticle() {
    const [title, setTitle] = useState<string>("")
    const [content, setContent] = useState<string>("")

    const handleSetValue = () => {
        console.log("set")
        let articleAmount = localStorage.getItem(`${userName}AA`);
        let maxArticle = localStorage.getItem(`${userName}mAA`);
        if(articleAmount == null){
            articleAmount = "1";
        } else {
            const aa = Number(articleAmount) + 1;
            articleAmount = String(aa);
        }
        if(maxArticle == null){
            maxArticle = "1";
        } else {
            const aa = Number(maxArticle) + 1;
            maxArticle = String(aa);
        }
        for(let i = 0; i < Number(maxArticle); ++i){
            if(localStorage.getItem(`${userName}art.${i}title`) == null){
                localStorage.setItem(`${userName}art.${i}title`, title);
                localStorage.setItem(`${userName}art.${i}content`, content);
                break;
            }
        }
        localStorage.setItem(`${userName}AA`, articleAmount);
        localStorage.setItem(`${userName}mAA`, maxArticle);
        setTitle("");
        setContent("");
        console.log(localStorage.getItem(`${userName}AA`));
    }
  
    return (
      <Grid
        sx={{
          bgcolor: "lavender",
          width: "100%",
          display: "flex",
          
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            m: 4,
            boxShadow: 6,
            bgcolor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 300,
            height: 400,
          }}
        >
          <CardContent
            sx={{
              m: 1,
              display: "flex",
              flexDirection: "column",
              width: 300,
              height: 200,
            }}
          >
            <Box sx={{ height: "200px" }}>
              <CardMedia
                component="img"
                sx={{ width: "100%", height: "100%" }}
  
              />
            </Box>
            <Box sx={{ color: "black" }}>
              <TextField
                required
                id="filled-required"
                label="title"
                value={title}
                defaultValue=""
                onChange={(e)=> setTitle(e.target.value)}
                variant="filled"
                sx={{m:2,width:230}}
              />
              <TextField
                required
                id="filled-required"
                label="content"
                value={content}
                defaultValue=""
                onChange={(e)=>setContent(e.target.value)}
                variant="filled"
                sx={{m:2,width:230}}
              />
            </Box>
            <Button onClick={handleSetValue}>Send</Button>
          </CardContent>
        </Box>
      </Grid>
    );
  }