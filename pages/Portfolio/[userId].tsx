import { Box } from "@mui/material";
import PortfolioHeader from "../../components/Header/PortfolioHeader";
import PortfolioArticleModal from "../../components/Portfolio/PortfolioArticleModal";
import PortfolioArticles from "../../components/Portfolio/PortfolioArticles";

export default function Portfolio() {
    return (
        <Box>
            <PortfolioHeader />
            <PortfolioArticles />
            <PortfolioArticleModal />
        </Box>
    );
}
