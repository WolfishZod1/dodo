import { Button } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

export function LanguageControl() {
   return (
      <Button
         sx={{
            fontWeight: 600,
            textTransform: "capitalize",
            color: "rgb(0, 0, 0)",
            ":hover": {
               color: "rgb(255, 105, 0);",
            },
            padding: "0",
         }}
         variant="outlined"
      >
         <LanguageIcon sx={{ marginRight: "22px" }} />
         <span
            style={{
               position: "absolute",
               display: "inline-block",
               padding: "0px 6px",
               top: "-6px",
               left: "14px",
               background: "rgb(255, 105, 0)",
               border: "1.5px solid rgb(255, 255, 255)",
               borderRadius: "100px",
               color: "rgb(255, 255, 255)",
               fontWeight: 600,
               fontSize: "10px",
               lineHeight: "16px",
               textAlign: "center",
            }}
         >
            RU
         </span>
         Язык
      </Button>
   );
}
