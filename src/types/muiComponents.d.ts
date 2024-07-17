import type { TypographyPropsVariantOverrides } from "@mui/material";

declare module "@mui/material" {
   interface TypographyPropsVariantOverrides {
      colored: true;
   }
}
