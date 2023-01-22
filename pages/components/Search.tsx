import { Box, Divider, List, ListItem } from "@mui/material";
import { useSearch } from "../../Hooks/hooks";
import { ArticleProps, NowPageProps } from "../../Types/type";
import ArticleRow from "./ArticleRow";
import SubHeader from "./SubHeader";

export default function Search({ nowPage }: Pick<NowPageProps, "nowPage">) {
    const { article } = useSearch();
    return (
        <Box>
            <SubHeader nowPage={nowPage}></SubHeader>
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
