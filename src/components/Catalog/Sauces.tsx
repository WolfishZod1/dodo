import { Box, Typography } from "@mui/material";

export function Sauces() {
   return (
      <Box
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
            Соусы
         </Typography>
      </Box>
   );
}
