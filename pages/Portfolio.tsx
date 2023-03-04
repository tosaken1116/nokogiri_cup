import { Box } from "@mui/material";
import Articles from "../components/Article/PortfolioArticles";
import PortfolioHeader from "../components/Header/PortfolioHeader";

export default function Portfolio() {
    return (
        <Box>
            <PortfolioHeader />
            <Articles />
        </Box>
    );
}
