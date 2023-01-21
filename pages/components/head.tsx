import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const status = 1;
export default function Header() {
  return (
    <Box sx={{ flex: "auto", color: "text.disabled" }}>
      <AppBar position="static" sx={"background-color:#EEEEEE"}>
        <Stack direction="row">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "black" }}
            >
              Surportforio仮
            </Typography>
          </Toolbar>
          {status ? (
            <Box>
              <Stack direction="row">
                <Button variant="contained" disabled>
                  singin
                </Button>
                <Button variant="contained" disabled>
                  signup
                </Button>
              </Stack>
            </Box>
          ) : (
            <Button variant="contained" disabled>
              Username
            </Button>
          )}
        </Stack>
      </AppBar>
    </Box>
  );
}
