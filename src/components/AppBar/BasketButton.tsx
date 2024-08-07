import { Button } from "@mui/material";
import { useState } from "react";
import { Basket } from "./Basket";

export function BasketButton() {
   const [open, setOpen] = useState(false);

   const onClose = () => setOpen(false);

   return (
      <>
         <Button
            sx={{
               right: "-5px",
               top: "9px",
            }}
            variant="contained"
            onClick={() => setOpen(true)}
         >
            Корзина
         </Button>
         <Basket
            open={open}
            onClose={onClose}
         />
      </>
   );
}
