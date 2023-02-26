import { Box, List, ListItem } from "@mui/material";
import ArticleRow from "../components/ArticleRow";
import SubHeader from "../components/SubHeader";
import { useSearch } from "../Hooks/hooks";
import { ArticleProps } from "../Types/type";

export default function Search() {
    const { article } = useSearch();
    return (
        <Box>
            <SubHeader></SubHeader>
            <List sx={{ maxHeight: "70vh", overflow: "auto" }}>
                {article?.map(
                    (
                        {
                            createdAt,
                            title,
                            githubUrl,
                            authorId,
                            caption,
                        }: ArticleProps,
                        index: number
                    ) => (
                        <ListItem key={index}>
                            <ArticleRow
                                createdAt={createdAt}
                                title={title}
                                githubUrl={githubUrl}
                                authorId={authorId}
                                caption={caption}
                            />
                        </ListItem>
                    )
                )}
            </List>
        </Box>
    );
}
