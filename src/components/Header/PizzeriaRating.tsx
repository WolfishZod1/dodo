import { Typography } from "@mui/material";
import star from "@assets/img/star.svg";

export function PizzeriaRating() {
   return (
      <Typography
         sx={{
            fontSize: "0.9375rem",
            fontWeight: 500,
         }}
      >
         31 мин<span>.</span> 4.82
         <img
            src={star}
            style={{
               marginLeft: "2px",
               verticalAlign: "-2px",
            }}
         />
      </Typography>
   );
}
