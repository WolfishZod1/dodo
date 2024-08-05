import { Box } from "@mui/material";

interface Props {
   picture: string;
}

export function PictureProduct({ picture }: Props) {
   return (
      <Box
         sx={{
            position: "relative",
            display: "inline-block",

            verticalAlign: "top",
            width: "530px",
            maxHeight: "610px",
         }}
      >
         <Box
            sx={{
               margin: "92px 52px 0px",
            }}
         >
            <img
               src={picture}
               style={{
                  width: "426px",
               }}
            />
         </Box>
      </Box>
   );
}
