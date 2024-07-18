import { AppBar as MuiAppBar, Toolbar } from "@mui/material";
import { Basket } from "./Basket";
import { LinkProducts } from "./LinkProducts";

export function AppBar() {
   return (
      <MuiAppBar>
         <Toolbar
            sx={{
               width: "1300px",
               marginLeft: "47.5px",
               marginRight: "47.5px",
            }}
         >
            <LinkProducts />
            <Basket />
         </Toolbar>
      </MuiAppBar>
   );
}
