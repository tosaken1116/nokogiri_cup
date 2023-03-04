import { Box, List, ListItem } from "@mui/material";
import ArticleRow from "../components/Article/ArticleRow";
import SubHeader from "../components/Header/SubHeader";
import { useSearch } from "../Hooks/hooks";
import { ArticleProps } from "../Types/type";

export default function Search() {
    const { article } = useSearch();
    return (
        <Box>
            <SubHeader></SubHeader>
            <List sx={{ maxHeight: "70vh", overflow: "auto" }}>
                {article?.map((articleProps: ArticleProps, index: number) => (
                    <ListItem key={index}>
                        <ArticleRow {...articleProps} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}
