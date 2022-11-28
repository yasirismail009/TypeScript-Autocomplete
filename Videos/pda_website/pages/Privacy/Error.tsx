import { createTheme, ThemeProvider } from "@mui/material/styles";
import ErrorPage from "../../Components/ErrorPage/WebGuardBlocking";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffc200",
    },
    secondary: {
      main: "#173371",
    },
  },
});

export default function MaliciousError() {
  return (
    <ThemeProvider theme={theme}>
      <ErrorPage />
    </ThemeProvider>
  );
}
