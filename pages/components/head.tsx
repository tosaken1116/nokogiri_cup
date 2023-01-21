import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1, color: "text.disabled" }}>
      <AppBar position="static" sx={"background-color:#EEEEEE;"}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Surportforio仮
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
