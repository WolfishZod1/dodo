import { Box, Typography } from "@mui/material";

export function EmptyBasket() {
   return (
      <Box
         sx={{
            display: "flex",
            flexFlow: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "30px",
            width: "430px",
            backgroundColor: "rgb(243, 243, 247)",
            height: "100%",
         }}
      >
         <img
            style={{ width: "100%", maxWidth: "314px", padding: "4px" }}
            src="https://cdn.dodostatic.net/site-static/dist/assets/5aa5dac99a832c62f3ef..svg"
         />
         <Typography
            variant="h5"
            sx={{ margin: "17.43px 0px" }}
         >
            Ой, пусто!
         </Typography>
         <Typography
            sx={{
               whiteSpace: "pre-wrap",
               textAlign: "center",
               lineHeight: "19.6px",
               width: "262px",
            }}
         >
            Ваша корзина пуста, откройте «Меню» и выберите понравившийся товар. Мы доставим ваш
            заказ от 3 000 тг.
         </Typography>
      </Box>
   );
}
