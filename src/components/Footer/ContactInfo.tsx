import { Box } from "@mui/material";
import { LinksContact } from "./LinksContact";
import { AddApp } from "./AddApp";

export function ContactInfo() {
   return (
      <Box
         sx={{
            backgroundColor: "transparent",
            padding: "30px 0px 0px 0px",
            margin: "0px 71.5px",
            justifyContent: "space-between",
         }}
      >
         <LinksContact />
         <AddApp />
      </Box>
   );
}
