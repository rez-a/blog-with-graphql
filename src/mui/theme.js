import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: `"Estedad", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
        "Droid Sans", "Helvetica Neue", sans-serif`,
        fontWeightThin: 100,
        fontWeightLight: 200,
        fontWeightExtraLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightSemiBold: 600,
        fontWeightBold: 700,
        fontWeightExtraBold: 800,
        fontWeightBlack: 900
    },
    direction: "rtl"
})

export default theme;