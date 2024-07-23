import { Box, Link, Stack } from "@mui/material";

export function AddApp() {
   return (
      <Box
         sx={{
            marginBottom: "27px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-end",
            flexGrow: 1,
            flexBasis: "30%",
         }}
      >
         <Stack>
            <Box
               sx={{
                  display: "flex",
                  gap: "12px",
                  marginBottom: "16px",
               }}
            ></Box>
            <Link
               sx={{
                  color: "rgb(255, 255, 255)",
               }}
            >
               feedback@dodopizza.kz
            </Link>
         </Stack>
      </Box>
   );
}
