import { Box, Typography } from "@mui/material";
import { Filling } from "./Filling";
import { AddSauces } from "./AddSauces";
import { ValueProducts } from "./ValueProducts";
import { useSelector } from "react-redux";
import { selectProductPrice, selectProductsCount } from "@selectors/productsBasket.selector";

interface Props {
   products: ProductBasket[];
}

export function FilledBasket({ products }: Props) {
   const count = useSelector(selectProductsCount);
   const price = useSelector(selectProductPrice);
   return (
      <Box
         sx={{
            display: "flex",
            flexFlow: "column",
            height: "100%",
            width: "430px",
            backgroundColor: "rgb(243, 243, 247)",
         }}
      >
         <Typography
            variant="h5"
            sx={{ padding: "0px 16px", margin: "24px 0px 16px 0px", lineHeight: "28px" }}
         >
            {count} товаров на {price} тг.
         </Typography>
         {products.map((product, i) => (
            <Filling
               price={product.price}
               size={product.size}
               dough={product.dough}
               id={product.id}
               type={product.type}
               key={i}
               index={i}
            />
         ))}
         <AddSauces />
         <ValueProducts />
      </Box>
   );
}
