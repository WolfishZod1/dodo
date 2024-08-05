import { Box, Typography } from "@mui/material";
import { selectProductsBeverages } from "@selectors/productsCatalog.selectors";
import { useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";

export function Bevereges() {
   const beverages = useSelector(selectProductsBeverages);
   return (
      <Box
         id="beverages"
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
            Напитки
         </Typography>
         {beverages.map((beverage, i) => (
            <ProductCard
               key={i}
               text={beverage.name}
               ingredients={beverage.description}
               price={beverage.price}
               picture={beverage.picture}
               id={i}
               type="beverages"
            ></ProductCard>
         ))}
      </Box>
   );
}
