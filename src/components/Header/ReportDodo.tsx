import { Link, Typography } from "@mui/material";

export function ReportDodo() {
   return (
      <Typography
         variant="subtitle2"
         sx={{
            marginLeft: "49px",
            fontSize: "0.75rem",
            fontWeight: "600",
            marginBottom: "0",
         }}
      >
         Сеть №1 в Казахстане
         <br />
         <Link
            sx={{
               fontSize: "inherit",
               color: "rgb(255, 105, 0);",
            }}
         >
            по количеству пиццерий
         </Link>
      </Typography>
   );
}
