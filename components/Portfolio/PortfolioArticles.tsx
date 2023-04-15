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
        <Box>
            <Grid
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    overflow: "auto",
                    maxHeight: "80vh",
                    justifyContent: "center",
                }}
            >
                {articles?.map((article: PortfolioArticlesCardProps) => (
                    <Box key={article.articleId}>
                        <PortfolioArticlesCard {...article} />
                    </Box>
                ))}
            </Grid>
        </Box>
    );
}
