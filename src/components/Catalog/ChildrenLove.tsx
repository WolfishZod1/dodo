import { Box, Typography } from "@mui/material";

export function ChildrenLove() {
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
            Любят дети
         </Typography>
      </Box>
   );
}
