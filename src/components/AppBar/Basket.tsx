import { Cross } from "@components/SvgIcon/Сross";
import { Button, Drawer } from "@mui/material";
import { EmptyBasket } from "./EmptyBasket";
import { useState } from "react";
import { FilledBasket } from "./FilledBasket";

interface Props {
   open: boolean;
   onClose: () => void;
}

export function Basket({ open, onClose }: Props) {
   let basket;

   const [currentBasket, setCurrentBasket] = useState("filled");

   if (currentBasket === "empty") {
      basket = <EmptyBasket />;
   } else {
      basket = <FilledBasket />;
   }

   return (
      <Drawer
         open={open}
         anchor="right"
      >
         {basket}
         <Button
            onClick={onClose}
            variant="outlined"
            sx={{ position: "absolute", left: "20%", top: "10%", width: "100px" }}
         >
            <Cross />
         </Button>
      </Drawer>
   );
}
