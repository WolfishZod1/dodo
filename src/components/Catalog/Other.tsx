import { Box, Typography } from "@mui/material";

export function Other() {
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
            Другие товары
         </Typography>
      </Box>
   );
}
