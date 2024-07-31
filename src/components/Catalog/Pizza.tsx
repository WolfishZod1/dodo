import { Box, Typography } from "@mui/material";
import { ProductCard } from "./ProductCard";
import "./ProductCard.css";
import { useEffect } from "react";
import { fetchProducts } from "@slices/productsCatalog.slice/productsCatalog.thunks";
import { useAppDispatch } from "@slices/store";
import { useSelector } from "react-redux";
import { selectProducts } from "@selectors/productsCatalog.selectors";

export function Pizza() {
   const dispatch = useAppDispatch();

   const products = useSelector(selectProducts);

   useEffect(() => {
      dispatch(fetchProducts());
   }, [dispatch]);

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
            Пиццы
         </Typography>

         {products.map((p, i) => (
            <ProductCard
               key={i}
               text={p.name}
               ingredients={p.description}
               price={p.price}
               picture={p.picture}
            />
         ))}
      </Box>
   );
}
