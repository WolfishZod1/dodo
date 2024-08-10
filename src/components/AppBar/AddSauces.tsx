import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { Sauces } from "./Sauces";

export function AddSauces() {
   const [open, setOpen] = useState(false);

   const onClose = () => setOpen(false);
   return (
      <>
         <Box sx={{ paddingBottom: "240px" }}>
            <Typography
               variant="h6"
               sx={{ margin: "16px 16px 0px", lineHeight: "18px" }}
            >
               Добавить к заказу?
            </Typography>
            <Button
               variant="outlined"
               sx={{ margin: "0px -20px 0px 0px", width: "112px", padding: "0px 16px" }}
               onClick={() => setOpen(true)}
            >
               <Box
                  sx={{
                     background: "rgb(255, 255, 255)",
                     height: "108px",
                     boxShadow: "rgba(6, 5, 50, 0.1) 0px 6px 20px",
                     borderRadius: "12px",
                     margin: "14px 0px 26px",
                     display: "flex",
                     flexFlow: "column",
                     alignItems: "center",
                     justifyContent: "center",
                     padding: "4px",
                  }}
               >
                  <img
                     style={{ width: "72px", height: "72px" }}
                     src="https://cdn.dodostatic.net/site-static/dist/assets/d49ca9b7399dd0766e60..png"
                  />
                  <Typography
                     sx={{
                        margin: "-6px 0px 0px",
                        height: "28px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textTransform: "capitalize",
                        color: "rgb(0, 0, 0)",
                     }}
                  >
                     Соусы
                  </Typography>
               </Box>
            </Button>
         </Box>
         <Sauces
            open={open}
            onClose={onClose}
         />
      </>
   );
}
