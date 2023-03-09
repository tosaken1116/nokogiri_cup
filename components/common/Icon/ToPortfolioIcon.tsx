import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import { Box } from "@mui/material";
export const ToPortfolioIcon = () => {
    return (
        <Box
            position="relative"
            sx={{ height: "24px", width: "24px", scale: "0.8" }}
        >
            <ArticleOutlinedIcon sx={{ position: "absolute", left: "-1px" }} />
            <ArrowForwardOutlinedIcon
                sx={{
                    position: "absolute",
                    left: "-5px",
                    bottom: "-5px",
                    zIndex: 100,
                    fontSize: "16px",
                }}
            />
            <Box
                sx={{
                    position: "absolute",
                    left: "-4px",
                    bottom: "-5px",
                    backgroundColor: "#fff",
                    width: "14px",
                    height: "14px",
                    borderRadius: "50%",
                    zIndex: 90,
                }}
            />
        </Box>
    );
};
