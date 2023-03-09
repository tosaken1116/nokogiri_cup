import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Box } from "@mui/material";
export const ToProfileIcon = () => {
    return (
        <Box
            position="relative"
            sx={{ height: "24px", width: "24px", scale: "0.8" }}
        >
            <PersonOutlineOutlinedIcon
                sx={{ position: "absolute", left: "-1px" }}
            />
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
