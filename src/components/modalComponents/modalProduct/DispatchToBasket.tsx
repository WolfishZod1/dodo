import { Box, Button } from "@mui/material";
import { deleteProduct, putProduct } from "@slices/productsBasket.slice/productsBasket.slice";
import { useAppDispatch } from "@slices/store";

interface Props {
   price: number;
   id: number;
   type: ProductsCategories;
   dough: string;
   size: number;
   onClose: () => void;
   change?: number;
}

export function DispatchToBasket({ price, id, type, dough, size, onClose, change }: Props) {
   const dispatch = useAppDispatch();
   console.log(change);

   const handleClick = () => {
      if (change || change === 0) {
         dispatch(
            deleteProduct(change),
            putProduct({
               id: id,
               dough: dough,
               size: size,
               price: price,
               type: type,
               count: 1,
               standartPrice: price,
            }),
         );
         onClose();
      }
      dispatch(
         putProduct({
            id: id,
            dough: dough,
            size: size,
            price: price,
            type: type,
            count: 1,
            standartPrice: price,
         }),
      );
      onClose();
   };

   return (
      <Box sx={{ margin: "24px 30px 30px", position: "relative" }}>
         <Button
            variant="contained"
            onClick={handleClick}
            sx={{ padding: "12px 48px", width: "100%", textTransform: "none" }}
         >
            В корзину за {price} тг.
         </Button>
      </Box>
   );
}
