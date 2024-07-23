import { Box, Typography } from "@mui/material";

export function FreeDelivery() {
   return (
      <Box
         sx={{
            width: "35%",
            marginRight: "4%",
            marginBottom: "60px",
            fontSize: "16px",
            lineHeight: "22.4px",
            fontWeight: 500,
         }}
      >
         <Typography
            sx={{
               fontSize: "18px",
               fontWeight: 500,
               lineHeight: "25.2px",
               margin: "0px 0px 5px",
               color: "rgb(255, 105, 0)",
            }}
         >
            60 МИНУТ ИЛИ ПИЦЦА БЕСПЛАТНО
         </Typography>
         Если мы не успеем доставить любые продукты, кроме сувениров и соусов, за 60 минут, вы
         получите извинительную пиццу. Её можно будет добавить в один из следующих заказов.
      </Box>
   );
}
