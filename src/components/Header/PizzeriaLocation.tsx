import { Link, Typography } from "@mui/material";

export function PizzeriaLocation() {
   return (
      <Typography
         variant="h6"
         fontSize="1.125rem"
      >
         Доставка пиццы{" "}
         <Link
            sx={{
               fontSize: "inherit",
               color: "rgb(255, 105, 0);",
               ":hover": { color: "rgb(232, 97, 0);" },
            }}
         >
            Караганда
         </Link>
      </Typography>
   );
}
