import { Box, Typography } from "@mui/material";
import { selectProductsSnacks } from "@selectors/productsCatalog.selectors";
import { useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";

export function Snacks() {
   const snacks = useSelector(selectProductsSnacks);

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
            Закуски
         </Typography>

         {snacks.map((snack, i) => (
            <ProductCard
               key={i}
               text={snack.name}
               ingredients={snack.description}
               price={snack.price}
               picture={snack.picture}
            ></ProductCard>
         ))}
      </Box>
   );
}
