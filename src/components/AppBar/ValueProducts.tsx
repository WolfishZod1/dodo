import { Box, Button, Divider, Typography } from "@mui/material";
import { selectProductPrice, selectProductsCount } from "@selectors/productsBasket.selector";
import { useSelector } from "react-redux";

export function ValueProducts() {
   const count = useSelector(selectProductsCount);
   const price = useSelector(selectProductPrice);
   return (
      <Box
         sx={{
            backgroundColor: "rgb(255, 255, 255)",
            boxShadow: "rgba(6, 5, 50, 0.1) 0px -2px 4px",
            position: "fixed",
            bottom: "0px",
            width: "30%",
         }}
      >
         <Box sx={{ width: "100%", padding: "16px 24px 0px " }}>
            <input
               placeholder="Промокод"
               style={{
                  padding: "0px 90px 0px 0px",
                  height: "20px",
                  border: "none",
                  borderRadius: "0px",
                  outline: "none",
                  marginBottom: "16px",
               }}
            ></input>
            <Divider />
         </Box>
         <Box sx={{ padding: "16px 24px 24px" }}>
            <Box>
               <Box
                  sx={{
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "space-between",
                     textTransform: "capitalize",
                     marginBottom: "8px",
                  }}
               >
                  <Typography sx={{ fontSize: "12px", fontWeight: 600, lineHeight: "14px" }}>
                     {count} товаров
                  </Typography>
                  <Typography sx={{ fontSize: "12px", fontWeight: 600, lineHeight: "14px" }}>
                     {price} тг.
                  </Typography>
               </Box>
               <Box
                  sx={{
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "space-between",
                     textTransform: "capitalize",
                  }}
               >
                  <Typography sx={{ fontSize: "12px", fontWeight: 600, lineHeight: "14px" }}>
                     Начислим додокоины
                  </Typography>
                  <Typography sx={{ fontSize: "12px", fontWeight: 600, lineHeight: "14px" }}>
                     +{Math.round(price * 0.05)}
                  </Typography>
               </Box>
               <Divider />
            </Box>
         </Box>
         <Box
            sx={{
               display: "flex",
               justifyContent: "space-between",
               height: "72px",
               padding: "12px 16px",
               backgroundColor: "rgb(255, 255, 255)",
            }}
         >
            <Box sx={{ display: "flex", alignItems: "center", width: "128px" }}>
               <Typography sx={{ fontSize: "18px", lineHeight: "18px" }}>{price} тг.</Typography>
            </Box>
            <Button
               variant="contained"
               sx={{
                  textTransform: "none",
                  right: "3%",
                  padding: "12px 42px 12px 36px",
                  height: "48px",
                  lineHeight: "24px",
                  width: "192px",
               }}
            >
               К оформлению
            </Button>
         </Box>
      </Box>
   );
}
