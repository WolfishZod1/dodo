import { Box, Button } from "@mui/material";

export function DispatchToBasket() {
   return (
      <Box sx={{ margin: "24px 30px 30px", position: "relative" }}>
         <Button
            variant="contained"
            sx={{ padding: "12px 48px", width: "100%" }}
         >
            В корзину за 10000$
         </Button>
      </Box>
   );
}
