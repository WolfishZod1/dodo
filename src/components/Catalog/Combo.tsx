import { Box, Typography } from "@mui/material";
import { selectProductsCombos } from "@selectors/productsCatalog.selectors";
import { useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";

export function Combo() {
   const combos = useSelector(selectProductsCombos);

   return (
      <Box
         id="combo"
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
            Комбо
         </Typography>

         {combos.map((combo, i) => (
            <ProductCard
               key={i}
               text={combo.name}
               ingredients={combo.description}
               price={combo.price}
               picture={combo.picture}
            ></ProductCard>
         ))}
      </Box>
   );
}
