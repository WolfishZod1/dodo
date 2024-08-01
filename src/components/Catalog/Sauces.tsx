import { Box, Typography } from "@mui/material";
import { ProductCard } from "./ProductCard";
import { useSelector } from "react-redux";
import { selectProductsSauces } from "@selectors/productsCatalog.selectors";

export function Sauces() {
   const sauces = useSelector(selectProductsSauces);
   return (
      <Box
         id="sauces"
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
            Соусы
         </Typography>
         {sauces.map((sauce, i) => (
            <ProductCard
               key={i}
               text={sauce.name}
               ingredients={sauce.description}
               price={sauce.price}
               picture={sauce.picture}
            ></ProductCard>
         ))}
      </Box>
   );
}
