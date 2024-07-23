import { Box, Typography } from "@mui/material";

export function PriceDelivery() {
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
            От 3 000 ТГ.
         </Typography>
         <Typography
            sx={{
               fontSize: "inherit",
               lineHeight: "inherit",
               fontWeight: "inherit",
               marginBottom: "20px",
            }}
         >
            Минимальная сумма доставки
         </Typography>
         <Typography
            sx={{
               fontSize: "18px",
               fontWeight: 500,
               lineHeight: "25.2px",
               margin: "0px 0px 5px",
               color: "rgb(255, 105, 0)",
            }}
         >
            25 000 ТГ.
         </Typography>
         <Typography
            sx={{
               fontSize: "inherit",
               lineHeight: "inherit",
               fontWeight: "inherit",
               margin: "16px 0px",
            }}
         >
            Максимальная сумма при оплате наличными
         </Typography>
         Изображения продуктов могут отличаться от продуктов в заказе.
      </Box>
   );
}
