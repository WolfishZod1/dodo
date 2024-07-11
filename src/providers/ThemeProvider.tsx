import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { theme } from "@styles/theme";
import { PropsWithChildren } from "react";

export function ThemeProvider({ children }: PropsWithChildren) {
   return (
      <MuiThemeProvider theme={theme}>
         <CssBaseline />

         {children}
      </MuiThemeProvider>
   );
}
