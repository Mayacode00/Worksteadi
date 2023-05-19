import { createTheme } from "@mui/material";
import typography from "./typography";
import { blue, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2991F1",
    },
    text: {
      primary: "#0F1011",
      gray: "#5A5D61",
      secondary: "#E5E7EB",
      tertiary: "#7A7E80",
      black: "3E4447",
      // blue2: "#2C455B",
      blue: "#2991F1",
    },
    background: {
      default: "FFFFFF",
    },
  },
  typography,
});

export default theme;
