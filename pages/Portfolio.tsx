import { Box } from "@mui/material";
import Article from "./components/Article";
import Header from "./components/Header";
import PortfolioHeader from "./components/PortfolioHeader";


export default function Portfolio() {
  
  return (
    <Box>
    <PortfolioHeader />
    <Article />
    </Box>
  )
}