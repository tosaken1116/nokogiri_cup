import { Box } from "@mui/material";
import Articles from "../components/Articles";
import PortfolioHeader from "../components/PortfolioHeader";

export default function Portfolio() {
    return (
        <Box>
            <PortfolioHeader />
            <Articles />
        </Box>
    );
}
