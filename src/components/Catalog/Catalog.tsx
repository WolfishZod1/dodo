import { Box } from "@mui/material";
import { HalalProducts } from "./HalalProducts";
import { Pizza } from "./Pizza";
import { Combo } from "./Combo";
import { Snacks } from "./Snacks";
import { Cocktalis } from "./Cocktails";
import { Coffee } from "./Coffee";
import { ChildrenLove } from "./ChildrenLove";
import { Bevereges } from "./Beverages";
import { Sauces } from "./Sauces";
import { Other } from "./Other";

export function Catalog() {
   return (
      <Box
         sx={{
            margin: "0px 71.5px 0px 71.5px",
         }}
      >
         <HalalProducts />
         <Pizza />
         <Combo />
         <Snacks />
         <Cocktalis />
         <Coffee />
         <ChildrenLove />
         <Bevereges />
         <Sauces />
         <Other />
      </Box>
   );
}
