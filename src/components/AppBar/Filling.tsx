import { SmallCross } from "@components/SvgIcon/SmallCross";
import { Box, Button, Link, Typography } from "@mui/material";
import { FillingInfo } from "./FillingInfo";
import { CountProducts } from "./CountProducts";
import { useAppDispatch } from "@slices/store";
import { deleteProduct } from "@slices/productsBasket.slice/productsBasket.slice";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectProductCount } from "@selectors/productsBasket.selector";
import { ModalProduct } from "@components/modalComponents/modalProduct/ModalProduct";

interface Props {
   price: number;
   size: number;
   dough: string;
   id: number;
   type: ProductsCategories;
   index: number;
}

export function Filling({ price, size, dough, id, type, index }: Props) {
   const dispatch = useAppDispatch();
   const deleteCurrentProduct = () => dispatch(deleteProduct(index));

   const count = useSelector(selectProductCount(index));

   if (count < 1) {
      deleteCurrentProduct();
   }

   const [open, setOpen] = useState(false);

   const onClose = () => setOpen(false);

   return (
      <Box
         sx={{
            position: "relative",
            padding: "12px 16px",
            marginBottom: "8px",
            backgroundColor: "rgb(255, 255, 255)",
            width: "430px",
            height: "149px",
         }}
      >
         <FillingInfo
            size={size}
            dough={dough}
            id={id}
            type={type}
         />
         <Button
            variant="outlined"
            sx={{
               position: "absolute",
               top: "16px",
               right: "24px",
               width: "16px",
               minWidth: "0px",
               height: "16px",
               padding: "0px",
            }}
            onClick={deleteCurrentProduct}
         >
            <SmallCross />
         </Button>
         <Box sx={{ display: "flex", alignItems: "center", marginTop: "12px" }}>
            <Typography
               sx={{
                  fontSize: "16px",
                  lineHeight: "20px",
                  fontWeight: 600,
                  margin: "8px 8px 8px 0px",
               }}
            >
               {price} тг.
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
               <Button
                  sx={{
                     color: "rgb(255, 105, 0)",
                     ":hover": { color: "rgb(232, 97, 0)" },
                     fontSize: "14px",
                     textTransform: "capitalize",
                  }}
                  variant="outlined"
                  onClick={() => setOpen(true)}
               >
                  Изменить
               </Button>
               <CountProducts
                  count={count}
                  price={price}
               />
            </Box>
         </Box>
         <ModalProduct
            open={open}
            onClose={onClose}
            id={id}
            type={type}
            change={index}
         />
      </Box>
   );
}
