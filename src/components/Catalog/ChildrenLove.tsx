import { Box, Typography } from "@mui/material";
import { selectProductsChildrenLove } from "@selectors/productsCatalog.selectors";
import { useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";

export function ChildrenLove() {
   const loveProducts = useSelector(selectProductsChildrenLove);
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
            Любят дети
         </Typography>
         {loveProducts.map((product, i) => (
            <ProductCard
               key={i}
               text={product.name}
               ingredients={product.description}
               price={product.price}
               picture={product.picture}
            ></ProductCard>
         ))}
      </Box>
   );
}
