import { Box, Divider } from "@mui/material";
import { ContactInfo } from "./ContactInfo";
import { SocialInfo } from "./SocialInfo";

export function Footer() {
   return (
      <Box
         sx={{
            paddingBottom: "20px",
            position: "relative",
            display: "flex",
            flexFlow: "column",
            backgroundColor: "rgb(24, 24, 24)",
         }}
      >
         <ContactInfo />
         <Divider />
         <SocialInfo />
      </Box>
   );
}
