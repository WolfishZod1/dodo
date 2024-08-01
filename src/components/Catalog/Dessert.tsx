import { Box, Typography } from "@mui/material";

export function Dessert() {
   return (
      <Box
         id="dessert"
         sx={{
            display: "flex",
            flexWrap: "wrap",
         }}
      >
         <Typography
            variant="h4"
            sx={{
               margin: "32px 0px",
               width: "100%",
            }}
         >
            Десерты
         </Typography>
      </Box>
   );
}
