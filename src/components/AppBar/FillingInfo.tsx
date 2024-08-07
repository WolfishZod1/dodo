import { Box, Typography } from "@mui/material";

export function FillingInfo() {
   return (
      <Box
         sx={{
            display: "flex",
            borderBottom: "1px solid rgb(226, 226, 233)",
            paddingBottom: "12px",
         }}
      >
         <img
            style={{ width: "64px", height: "64px", marginRight: "16px" }}
            src="https://media.dodostatic.net/image/r:233x233/11EF01FD3C2AC8E791770181C4A9C04D.avif"
         />
         <Box sx={{ display: "flex", flexFlow: "column" }}>
            <Typography
               sx={{ fontWeight: 600, fontSize: "16px", lineHeight: "20px", marginBottom: "4px" }}
            >
               Креветки со сладким чили
            </Typography>
            <Typography
               sx={{
                  fontSize: "12px",
                  lineHeight: "16px",
                  color: "rgb(92, 99, 112)",
                  margin: "0px",
                  whiteSpace: "pre-wrap",
               }}
            >
               30, традиционное тесто 30, 630 г
            </Typography>
         </Box>
      </Box>
   );
}
