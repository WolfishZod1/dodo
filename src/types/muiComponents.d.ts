declare module "@mui/material/styles" {
   interface TypographyPropsVariantOverrides {
      colored: true;
   }

   interface Palette {
      text: PaletteOptions & { alternative: string };
   }
}
