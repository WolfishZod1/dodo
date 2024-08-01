import { Box, Typography } from "@mui/material";
import { ProductCard } from "./ProductCard";
import "./ProductCard.css";
import { selectProductsPizza } from "@selectors/productsCatalog.selectors";
import { useSelector } from "react-redux";

export function Pizza() {
   const pizza = useSelector(selectProductsPizza);

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

         {pizza.map((pizza, i) => (
            <ProductCard
               key={i}
               text={pizza.name}
               ingredients={pizza.description}
               price={pizza.price}
               picture={pizza.picture}
            />
         ))}
      </Box>
   );
}
