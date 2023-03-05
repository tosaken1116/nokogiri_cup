import { createTheme } from "@mui/material";

export const createMuiTheme = () => {
    const theme = createTheme({
        typography: {
            fontFamily: '"Yusei Magic"',
        },
        palette: {
            primary: {
                main: "#5F5F5F",
            },
            secondary: {
                main: "#2b2b2b",
            },
        },
    });
    return theme;
};
