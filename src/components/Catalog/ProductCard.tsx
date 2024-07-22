import { Box } from "@mui/material";
import { PriceTagCard } from "./PriceTagCard";
import { MainProductCard } from "./MainProductCard";

interface Props {
   text: string;
   price: number;
   picture: string;
   ingredients: string;
}

export function ProductCard({ text, ingredients, price, picture }: Props) {
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
         <PriceTagCard price={price} />
      </Box>
   );
}
