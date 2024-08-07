import { Box, Button, Divider, Typography } from "@mui/material";

export function ValueProducts() {
   return (
      <Box
         sx={{
            backgroundColor: "rgb(255, 255, 255)",
            boxShadow: "rgba(6, 5, 50, 0.1) 0px -2px 4px",
            paddingBottom: "36px",
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
            <Box sx={{ paddingBottom: "16px", marginBottom: "16px" }}>
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
                     25 товаров
                  </Typography>
                  <Typography sx={{ fontSize: "12px", fontWeight: 600, lineHeight: "14px" }}>
                     110 100 тг.
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
                     +5 505
                  </Typography>
               </Box>
               <Divider />
            </Box>
         </Box>
         <Box
            sx={{
               display: "flex",
               justifyContent: "space-between",
               position: "fixed",
               height: "72px",
               width: "30%",
               padding: "12px 16px",
               backgroundColor: "rgb(255, 255, 255)",
               bottom: "0px",
            }}
         >
            <Box sx={{ display: "flex", alignItems: "center", width: "128px" }}>
               <Typography sx={{ fontSize: "18px", lineHeight: "18px" }}>110 100 тг.</Typography>
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
