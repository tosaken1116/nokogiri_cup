import { gql, useQuery } from "@apollo/client";
import { Box, List, ListItem } from "@mui/material";
import ArticleLayout from "../components/ArticleLayout";
import ArticleRow from "../components/ArticleRow";
import { ArticleProps } from "../Types/type";

export default function Home() {
    return <ArticleLayout></ArticleLayout>;
}
