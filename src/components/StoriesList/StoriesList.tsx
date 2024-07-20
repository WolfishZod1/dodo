import { Box } from "@mui/material";
import { SlideImages } from "./SlideImages";

export function StoriesList() {
   return (
      <Box
         sx={{
            height: "274px",
            width: "auto",
            padding: "0px 23.5px 0px 23.5px",
            position: "relative",
         }}
      >
         <SlideImages />
      </Box>
   );
}
