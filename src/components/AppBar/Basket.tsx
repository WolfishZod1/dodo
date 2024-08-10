import { Cross } from "@components/SvgIcon/Сross";
import { Button, Drawer } from "@mui/material";
import { EmptyBasket } from "./EmptyBasket";
import { FilledBasket } from "./FilledBasket";
import { useSelector } from "react-redux";
import { selectProductBasket } from "@selectors/productsBasket.selector";

interface Props {
   open: boolean;
   onClose: () => void;
}

export function Basket({ open, onClose }: Props) {
   const products = useSelector(selectProductBasket);

   let basket;

   if (products.length === 0) {
      basket = <EmptyBasket />;
   } else {
      basket = <FilledBasket products={products} />;
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
