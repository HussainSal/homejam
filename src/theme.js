import { createTheme } from "@material-ui/core";

const theme = createTheme({
  typography: {
    fontFamily: "Libre Baskerville",
    h1: {
      fontSize: "80px",
      lineHeight: "94px",
      fontWeight: "700",
      "@media (max-width:600px)": {
        fontSize: "60px",
        lineHeight: "44px",
        fontWeight: "500",
      },
      "@media (max-width:400px)": {
        fontSize: "30px",
        lineHeight: "24px",
        fontWeight: "500",
      },
    },
    h2: {
      fontSize: "32px",
      lineHeight: "40px",
      fontWeight: "400",

      "@media (max-width:400px)": {
        fontSize: "20px",
        lineHeight: "24px",
        fontWeight: "400",
      },
    },
    h3: {
      fontSize: "20px",
      lineHeight: "32px",
      fontWeight: "700",
    },
    h4: {
      fontFamily: "Quattrocento",
      fontSize: "16px",
      lineHeight: "32px",
      fontWeight: "700",
    },
    h5: {
      fontFamily: "Nunito",
      fontSize: "16px",
      lineHeight: "32px",
      fontWeight: "400",
    },
    subtitle1: {
      fontFamily: "Nunito",
      fontWeight: "400",
      fontSize: "24px",
      lineHeight: "32px",
      "@media (max-width:600px)": {
        fontFamily: "Nunito",
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: "400",
      },
      "@media (max-width:400px)": {
        fontFamily: "Nunito",
        fontSize: "12px",
        lineHeight: "16px",
        fontWeight: "400",
      },
    },
    subtitle2: {
      fontFamily: "Open+Sans",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "26px",
    },
    body1: {
      fontFamily: "Nunito",
      fontSize: "11px",
      lineHeight: "16px",
      fontWeight: "600",
    },
    body2: {
      fontFamily: "Nunito",
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "400",
    },
  },
  palette: {
    primary: {
      main: "#FFF",
    },
    secondary: {
      main: "#E5C558",
    },
  },
});

export default theme;
