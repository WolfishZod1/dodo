import { Box, Typography } from "@mui/material";
import { ProductCard } from "./ProductCard";
import pizza from "@assets/img/pizza.png";
import "./ProductCard.css";

export function Pizza() {
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
         <ProductCard
            text="Пицца Береке Ет"
            ingredients="Пряная говядина, томаты, красный лук, моцарелла, фирменный соус альфредо, чеснок, итальянские травы"
            price={3150}
            picture={pizza}
         />
         <ProductCard
            text="Пицца Береке Ет"
            ingredients="Пряная говядина, томаты, красный лук, моцарелла, фирменный соус альфредо, чеснок, итальянские травы"
            price={3150}
            picture={pizza}
         />
         <ProductCard
            text="Пицца Береке Ет"
            ingredients="Пряная говядина, томаты, красный лук, моцарелла, фирменный соус альфредо, чеснок, итальянские травы"
            price={3150}
            picture={pizza}
         />
         <ProductCard
            text="Пицца Береке Ет"
            ingredients="Пряная говядина, томаты, красный лук, моцарелла, фирменный соус альфредо, чеснок, итальянские травы"
            price={3150}
            picture={pizza}
         />
         <ProductCard
            text="Пицца Береке Ет"
            ingredients="Пряная говядина, томаты, красный лук, моцарелла, фирменный соус альфредо, чеснок, итальянские травы"
            price={3150}
            picture={pizza}
         />
      </Box>
   );
}
