import { Box, Typography } from "@mui/material";
import map from "@assets/img/map.jpg";

export function ZoneDelivery() {
   return (
      <Box sx={{ width: "22%" }}>
         <Typography
            sx={{
               fontSize: "18px",
               fontWeight: 500,
               lineHeight: "25.2px",
               margin: "0px 0px 5px",
               color: "rgb(255, 105, 0)",
            }}
         >
            ЗОНА ДОСТАВКИ ОГРАНИЧЕНА
         </Typography>
         <Box
            sx={{
               position: "relative",
            }}
         >
            <img
               src={map}
               style={{
                  width: "290px",
                  height: "290px",
               }}
            />
            <span
               style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "100%",
                  padding: "20px",
                  textAlign: "center",
                  transform: "translate(-50%, -50%)",
                  lineHeight: "28px",
                  fontSize: "20px",
                  fontWeight: 500,
               }}
            >
               Зона доставки
            </span>
         </Box>
      </Box>
   );
}
