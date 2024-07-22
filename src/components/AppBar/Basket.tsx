import { Button } from "@mui/material";

export function Basket() {
   return (
      <Button
         sx={{
            right: "-5px",
            top: "9px",
         }}
         variant="contained"
      >
         Корзина
      </Button>
   );
}
