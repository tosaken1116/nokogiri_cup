import {
  Box,
  CardContent,
  CardMedia,
  Container,
  Grid,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import { wrap } from "module";
import next from "next";
import React from "react";
import { Url } from "url";

type ArticleType = {
  userId: number;
  articleId: number;
  title: string;
  content: string;
  createdAt: string;
  imgURL: string;
};

export const Articles = [
  {
    userId: 1,
    articleId: 1,
    title: "hogeeeeeeeeeeeeeeeeeeeeeeeeeee",
    content: "hogehogeeeeeeeeeeeeeeeeeeeee",
    createdAt: "2021.1.21",
    imgURL:
      "https://img.freepik.com/free-vector/people-putting-puzzle-pieces-together_52683-28610.jpg?w=2000",
  },
  {
    userId: 1,
    articleId: 2,
    title: "fuga",
    content: "fugafuga",
    createdAt: "2022.1.21",
    imgURL:
      "https://img.freepik.com/free-vector/people-putting-puzzle-pieces-together_52683-28610.jpg?w=2000",
  },
  {
    userId: 3,
    articleId: 3,
    title: "piyo",
    content: "piyopiyo",
    createdAt: "2023.1.21",
    imgURL:
      "https://img.freepik.com/free-vector/people-putting-puzzle-pieces-together_52683-28610.jpg?w=2000",
  },
  {
    userId: 1,
    articleId: 1,
    title: "hoge",
    content: "hogehoge",
    createdAt: "2021.1.21",
    imgURL:
      "https://cdn-bookplus.nikkei.com/atcl/catalog/22/12/22/00575/9784296201341_B.jpg?__scale=w:1080,h:1440&_sh=0b00ac0540g",
  },
  {
    userId: 1,
    articleId: 1,
    title: "hoge",
    content: "hogehoge",
    createdAt: "2021.1.21",
    imgURL:
      "https://imgjapan.com/wp-content/themes/img_jpn/static/img/home/img-logo.png",
  },
  {
    userId: 3,
    articleId: 3,
    title: "piyo",
    content: "piyopiyo",
    createdAt: "2023.1.21",
  },
  {
    userId: 3,
    articleId: 3,
    title: "piyo",
    content: "piyopiyo",
    createdAt: "2023.1.21",
  },
  {
    userId: 3,
    articleId: 3,
    title: "piyo",
    content: "piyopiyo",
    createdAt: "2023.1.21",
  },
];

export default function Article() {
  return (
    <Grid sx={{ 
      bgcolor:"lavender",
      width: "100%", 
      display: "flex", flexWrap: "wrap" }}>
      {Articles.map((article) => {
        return (
          <Box
            key={article.articleId}
            sx={{
              m: 4,
              boxShadow:6,
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
                  sx={{width: "100%", height: "100%" }}
                  image={article.imgURL}
                  alt={article.title}
                />
              </Box>
              <Box sx={{color:"black"}}>
              <Typography sx={{m:1,height:80}}>{article.title}</Typography>
              <Typography sx={{m:1, flexDirection:"wrap"}}>{article.content}</Typography>
              </Box>
            </CardContent>
          </Box>
        );
      })}
    </Grid>
  );
}
