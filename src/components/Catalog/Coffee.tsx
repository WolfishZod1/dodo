import { Box, Typography } from "@mui/material";
import { ProductCard } from "./ProductCard";
import { useSelector } from "react-redux";
import { selectProductsCoffee } from "@selectors/productsCatalog.selectors";

export function Coffee() {
   const coffee = useSelector(selectProductsCoffee);
   return (
      <Box
         id="coffee"
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
            Кофе
         </Typography>
         {coffee.map((coffee, i) => (
            <ProductCard
               key={i}
               text={coffee.name}
               ingredients={coffee.description}
               price={coffee.price}
               picture={coffee.picture}
            ></ProductCard>
         ))}
      </Box>
   );
}
