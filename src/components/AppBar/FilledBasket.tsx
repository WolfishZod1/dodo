import { Box, Typography } from "@mui/material";
import { Filling } from "./Filling";
import { AddSauces } from "./AddSauces";
import { ValueProducts } from "./ValueProducts";

export function FilledBasket() {
   return (
      <Box
         sx={{
            display: "flex",
            flexFlow: "column",
            height: "100%",
            width: "430px",
            backgroundColor: "rgb(243, 243, 247)",
         }}
      >
         <Typography
            variant="h5"
            sx={{ padding: "0px 16px", margin: "24px 0px 16px 0px", lineHeight: "28px" }}
         >
            6 товаров на 6 050 тг.
         </Typography>
         <Filling />
         <Filling />
         <Filling />
         <AddSauces />
         <ValueProducts />
      </Box>
   );
}
