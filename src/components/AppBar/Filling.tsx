import { SmallCross } from "@components/SvgIcon/SmallCross";
import { Box, Button, Link, Typography } from "@mui/material";
import { FillingInfo } from "./FillingInfo";
import { CountProducts } from "./CountProducts";

export function Filling() {
   return (
      <Box
         sx={{
            position: "relative",
            padding: "12px 16px",
            marginBottom: "8px",
            backgroundColor: "rgb(255, 255, 255)",
            width: "430px",
            height: "149px",
         }}
      >
         <FillingInfo />
         <Button
            variant="outlined"
            sx={{
               position: "absolute",
               top: "16px",
               right: "24px",
               width: "16px",
               minWidth: "0px",
               height: "16px",
               padding: "0px",
            }}
         >
            <SmallCross />
         </Button>
         <Box sx={{ display: "flex", alignItems: "center", marginTop: "12px" }}>
            <Typography
               sx={{
                  fontSize: "16px",
                  lineHeight: "20px",
                  fontWeight: 600,
                  margin: "8px 8px 8px 0px",
               }}
            >
               1000$
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
               <Link
                  sx={{
                     color: "rgb(255, 105, 0)",
                     ":hover": { color: "rgb(232, 97, 0)" },
                     marginRight: "12px",
                  }}
               >
                  Изменить
               </Link>
               <CountProducts />
            </Box>
         </Box>
      </Box>
   );
}
