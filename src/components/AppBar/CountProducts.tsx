import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

export function CountProducts() {
   const [count, setCount] = useState(1);
   return (
      <Box
         sx={{
            width: "96px",
            display: "flex",
            height: "32px",
            backgroundColor: "rgb(243, 243, 247)",
            borderRadius: "9999px",
            alignItems: "center",
            justifyContent: "center",
         }}
      >
         <Button
            variant="outlined"
            sx={{
               width: "35.41%",
               height: "100%",
               padding: "0px 8px",
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               minWidth: "0%",
            }}
            onClick={() => setCount(count - 1)}
         >
            <svg
               width="10"
               height="10"
               viewBox="0 0 10 10"
            >
               <rect
                  width="10"
                  height="2"
                  y="4"
                  fill="#454B54"
                  rx="1"
               ></rect>
            </svg>
         </Button>
         <Typography
            sx={{
               color: "rgb(92, 99, 112)",
               width: "16.672px",
               fontSize: "16px",
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
            }}
         >
            {count}
         </Typography>
         <Button
            variant="outlined"
            sx={{
               width: "35.41%",
               height: "100%",
               padding: "0px 8px",
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               minWidth: "0%",
            }}
            onClick={() => setCount(count + 1)}
         >
            <svg
               width="10"
               height="10"
               viewBox="0 0 10 10"
            >
               <g fill="#454B54">
                  <rect
                     width="2"
                     height="10"
                     x="4"
                     ry="1"
                  ></rect>
                  <rect
                     width="10"
                     height="2"
                     y="4"
                     rx="1"
                  ></rect>
               </g>
            </svg>
         </Button>
      </Box>
   );
}
