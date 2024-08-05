import { Box } from "@mui/material";
import { PriceTagCard } from "./PriceTagCard";
import { MainProductCard } from "./MainProductCard";

interface Props {
   text: string;
   price: number;
   picture: string;
   ingredients: string;
   id: number;
   type: ProductsCategories;
}

export function ProductCard({ text, ingredients, price, picture, id, type }: Props) {
   return (
      <Box
         sx={{
            display: "flex",
            justifyContent: "space-between",
            flexFlow: "column",
            width: "292px",
            marginBottom: "60px",
            marginRight: "37.33333px",
         }}
      >
         <MainProductCard
            text={text}
            ingredients={ingredients}
            picture={picture}
         />
         <PriceTagCard
            price={price}
            id={id}
            type={type}
         />
      </Box>
   );
}
