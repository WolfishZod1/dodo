import { HalalIcon } from "@components/SvgIcon/HalalIcon";
import { Box, Typography } from "@mui/material";

export function HalalProducts() {
   return (
      <Box
         sx={{
            display: "flex",
            justifyContent: "center",
         }}
      >
         <HalalIcon />
         <Typography
            sx={{
               fontSize: "1rem",
               fontWeight: 500,
               lineHeight: "22.4px",
               marginLeft: "12px",
               marginTop: "1px",
            }}
         >
            Без свинины
            <br />
            <span
               style={{
                  color: "rgb(92, 99, 112)",
               }}
            >
               Мы готовим из цыпленка и говядины
            </span>
         </Typography>
      </Box>
   );
}
