import { Box, Typography } from "@mui/material";

export function Combo() {
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
            Комбо
         </Typography>
      </Box>
   );
}
