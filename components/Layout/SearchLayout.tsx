import { Stack } from "@mui/material";
import { SearchArticlesWrapper } from "../Article/ArticleWrapper";
import SubHeader from "../Header/SubHeader";
import ArticleLayout from "./ArticleLayout";

export default function SearchLayout() {
    return (
        <Stack>
            <SubHeader></SubHeader>
            <ArticleLayout>
                <SearchArticlesWrapper></SearchArticlesWrapper>
            </ArticleLayout>
        </Stack>
    );
}
