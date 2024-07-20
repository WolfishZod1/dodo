import { Box } from "@mui/material";

export function ScrollLeft() {
   return (
      <Box
         position="absolute"
         sx={{
            left: "3%",
            color: "rgb(255, 105, 0)",
            top: "45%",
         }}
      >
         <svg
            width="14"
            height="24"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
