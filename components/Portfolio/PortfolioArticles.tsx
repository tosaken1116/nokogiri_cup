import { Box, CircularProgress, Grid } from "@mui/material";
import { usePortfolioArticles } from "../../Hooks/hooks";
import { PortfolioArticlesCardProps } from "../../Types/type";
import PortfolioArticlesCard from "./PortfolioArticlesCard";

export default function PortfolioArticles() {
    const { articles, isLoading } = usePortfolioArticles();
    if (isLoading) {
        return <CircularProgress />;
    }
    return (
        <Grid
            sx={{
                display: "flex",
                flexWrap: "wrap",
                placeContent: "center",
                maxHeight: "85vh",
                overflow: "scroll",
            }}
        >
            {articles?.map((article: PortfolioArticlesCardProps) => (
                <Box key={article.articleId}>
                    <PortfolioArticlesCard {...article} />
                </Box>
            ))}
        </Grid>
    );
}
