import { createTheme } from "@mui/material";
import DodoTtf from "@assets/fonts/DoDo-VF.ttf";
import DodoWoff2 from "@assets/fonts/DoDo-VF.woff2";

export const theme = createTheme({
   palette: {
      primary: {
         main: "rgb(255, 105, 0);",
      },
      text: {
         primary: "rgb(0, 0, 0)",
      },
   },
   typography: {
      fontFamily: "Dodo Rounded, sans-serif",
      body1: {
         fontSize: "0.875rem",
         lineHeight: 1,
      },
   },
   components: {
      MuiCssBaseline: {
         styleOverrides: `
         @font-face {
          font-family: 'Dodo Rounded';
          src: url(${DodoTtf}) format("truetype");
          src: url(${DodoWoff2}) format("woff2-variations");
          font-weight: 100 700;
          font-stretch: 0% 300%;
          font-style: oblique 0deg 20deg
        }
       `,
      },

      MuiLink: {
         defaultProps: {
            underline: "none",
            color: "text",
            variant: "body1",
         },
         styleOverrides: {
            root: ({ theme }) => ({
               ":hover": {
                  color: theme.palette.primary.main,
                  fill: theme.palette.primary.main,
               },
               fontWeight: "600",

               transition: "color 0.25s ease",
            }),
         },
         // variants: [
         //    {
         //       props: { variant: "colored" },
         //       style: { color: "rgb(255, 105, 0);", fontSize: "0.75rem" },
         //    },
         //    {
         //       props: { variant: "colored", fontSize: "1.125rem" },
         //       style: {
         //          color: "rgb(255, 105, 0);",
         //          fontSize: "1.125rem",
         //          ":hover": { color: "rgb(232, 97, 0);" },
         //       },
         //    },
         // ],
      },
   },
});
