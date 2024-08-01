import { Box, Typography } from "@mui/material";
import { ProductCard } from "./ProductCard";
import { useSelector } from "react-redux";
import { selectProductsOthers } from "@selectors/productsCatalog.selectors";

export function Other() {
   const others = useSelector(selectProductsOthers);
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
            Другие товары
         </Typography>
         {others.map((other, i) => (
            <ProductCard
               key={i}
               text={other.name}
               ingredients={other.description}
               price={other.price}
               picture={other.picture}
            ></ProductCard>
         ))}
      </Box>
   );
}
