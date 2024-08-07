import { Box, Button } from "@mui/material";

interface Props {
   price: number;
}

export function DispatchToBasket({ price }: Props) {
   return (
      <Box sx={{ margin: "24px 30px 30px", position: "relative" }}>
         <Button
            variant="contained"
            sx={{ padding: "12px 48px", width: "100%", textTransform: "none" }}
         >
            В корзину за {price} тг.
         </Button>
      </Box>
   );
}
