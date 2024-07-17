import { Box, Divider, Link, Stack } from "@mui/material";
import { LanguageControl } from "./LanguageControl";
import { LiveStream } from "./LiveStream";
import { Logo } from "./Logo";
import { ReportDodo } from "./ReportDodo";
import { PizzeriaLocation } from "./PizzeriaLocation";
import { PizzeriaRating } from "./PizzeriaRating";
import { ClientOptions } from "./ClientOptions";

export function Header() {
   return (
      <Box>
         <Box
            sx={{
               display: "flex",
               padding: "12px 71.5px 12px 71.5px",
               lineHeighteight: "22.5px",
               justifyContent: "space-between",
               height: "52px",
               alignItems: "center",
            }}
         >
            <LanguageControl />
            <Stack
               spacing={2.5}
               direction="row"
            >
               <LiveStream />
               <Link
                  sx={{
                     lineHeight: "20px",
                  }}
               >
                  Франшиза
               </Link>
               <Link
                  sx={{
                     lineHeight: "20px",
                  }}
               >
                  О нас
               </Link>
               <Link
                  sx={{
                     lineHeight: "20px",
                  }}
               >
                  Контакты
               </Link>
            </Stack>
         </Box>
         <Divider />
         <Box
            sx={{
               display: "flex",
               margin: "0 71.5px 0 71.5px ",
               padding: "24px 0px 16px 0px",
               justifyContent: "space-between",
            }}
         >
            <Box
               sx={{
                  display: "flex",
               }}
            >
               <Box
                  sx={{
                     display: "flex",
                     flexDirection: "column",
                     boxSizing: "border-box",
                     lineHeight: 1.2,
                  }}
               >
                  <Logo />
                  <ReportDodo />
               </Box>
               <Box
                  sx={{
                     display: "flex",
                     flexDirection: "column",
                     boxSizing: "border-box",
                     lineHeight: 1.2,
                  }}
               >
                  <PizzeriaLocation />
                  <PizzeriaRating />
               </Box>
            </Box>

            <ClientOptions />
         </Box>
      </Box>
   );
}
