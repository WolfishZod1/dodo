import { Box, Typography } from "@mui/material";
import { FreeDelivery } from "./FreeDelivery";
import { PriceDelivery } from "./PriceDelivery";
import { ZoneDelivery } from "./ZoneDelivery";
export function Delivery() {
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
            Доставка и оплата
         </Typography>
         <FreeDelivery />
         <PriceDelivery />
         <ZoneDelivery />
      </Box>
   );
}
