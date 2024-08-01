import { Box, Typography } from "@mui/material";
import { selectProductsCocktails } from "@selectors/productsCatalog.selectors";
import { useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";

export function Cocktalis() {
   const cocktalis = useSelector(selectProductsCocktails);
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
            Коктейли
         </Typography>
         {cocktalis.map((cocktail, i) => (
            <ProductCard
               key={i}
               text={cocktail.name}
               ingredients={cocktail.description}
               price={cocktail.price}
               picture={cocktail.picture}
            ></ProductCard>
         ))}
      </Box>
   );
}
