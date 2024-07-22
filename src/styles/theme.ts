import { createTheme } from "@mui/material";
import DodoTtf from "@assets/fonts/DoDo-VF.ttf";
import DodoWoff2 from "@assets/fonts/DoDo-VF.woff2";

export const theme = createTheme({
   palette: {
      primary: {
         main: "rgb(255, 105, 0)",
         dark: "rgb(232, 97, 0)",
      },
      secondary: {
         main: "rgb(255, 240, 230)",
         dark: "rgb(255, 210, 179)",
      },
      info: {
         main: "rgba(255, 255, 255, 0.75)",
         dark: "rgba(6, 5, 50, 0.1)",
      },
      text: {
         primary: "rgb(0, 0, 0)",
         secondary: "rgb(255, 255, 255)",
         disabled: "rgb(209, 87, 0)",
      },
   },
   typography: {
      fontFamily: "Dodo Rounded, sans-serif",
      body1: {
         fontSize: "0.875rem",
         lineHeight: 1,
      },
      h4: {
         fontSize: "2.25rem",
         fontWeight: 600,
         lineHeight: "50.4px",
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
      MuiAppBar: {
         defaultProps: {
            variant: "elevation",
         },
         variants: [
            {
               props: { variant: "elevation" },
               style: ({ theme }) => ({
                  height: "58px",
                  backgroundColor: theme.palette.info.main,
                  boxShadow: `0px 4px 5px ${theme.palette.info.dark}`,
                  backdropFilter: "blur(20px)",
                  position: "sticky",
               }),
            },
         ],
      },
      MuiButton: {
         variants: [
            {
               props: { variant: "text" },
               style: ({ theme }) => ({
                  backgroundColor: theme.palette.secondary.main,
                  color: theme.palette.text.disabled,
                  borderRadius: "9999px",
                  boxShadow: "none",
                  fontSize: "1rem",
                  textTransform: "capitalize",
                  padding: "8px 20px 8px 20px",
                  lineHeight: "24px",
                  width: "120px",
                  ":hover": {
                     backgroundColor: theme.palette.secondary.dark,
                     color: theme.palette.text.disabled,
                  },
               }),
            },
            {
               props: { variant: "contained" },
               style: ({ theme }) => ({
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.text.secondary,
                  borderRadius: "9999px",
                  position: "absolute",
                  boxShadow: "none",
                  fontSize: "1rem",
                  textTransform: "capitalize",
                  padding: "8px 20px 8px 20px",
                  lineHeight: "24px",
                  ":hover": {
                     backgroundColor: theme.palette.primary.dark,
                     color: theme.palette.text.secondary,
                  },
               }),
            },
            {
               props: { variant: "outlined" },
               style: {
                  border: "none",
                  ":hover": {
                     border: "none",
                  },
               },
            },
         ],
      },
   },
});
