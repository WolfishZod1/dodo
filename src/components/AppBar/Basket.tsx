import { Button } from "@mui/material";

export function Basket() {
   return (
      <Button
         sx={{
            height: "40px",
            padding: "8px 20px 8px 20px",
            lineHeight: "24px",
            textTransform: "capitalize",
            fontSize: "16px",
            backgroundColor: "rgb(255, 105, 0)",
            color: "rgb(255, 255, 255)",
            borderRadius: "9999px",
            position: "absolute",
            right: "-5px",
            top: "9px",
            ":hover": {
               backgroundColor: "rgb(232, 97, 0)",
               color: "rgb(255, 255, 255)",
            },
         }}
      >
         Корзина
      </Button>
   );
}
