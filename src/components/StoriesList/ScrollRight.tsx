import { Box } from "@mui/material";

export function ScrollRight() {
   return (
      <Box
         position="absolute"
         sx={{
            rotate: "180deg",
            color: "rgb(255, 105, 0)",
            top: "43.7%",
            right: "3%",
         }}
      >
         <svg
            width="14"
            height="24"
            viewBox="0 0 7 12"
            fill="none"
         >
            <path
               d="M6 11L1 6L6 1"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
         </svg>
      </Box>
   );
}
