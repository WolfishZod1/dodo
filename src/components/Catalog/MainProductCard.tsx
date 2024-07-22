import { Box, Typography } from "@mui/material";

interface Props {
   text: string;
   picture: string;
   ingredients: string;
}

export function MainProductCard({ text, ingredients, picture }: Props) {
   return (
      <Box>
         <img
            src={picture}
            style={{
               width: "89%",
               margin: "5% 0px 0px 5%",
            }}
         />
         <Typography
            variant="h6"
            sx={{
               margin: "8px 0px",
               lineHeight: "24px",
            }}
         >
            {text}
         </Typography>
         <Typography
            sx={{
               color: "rgb(92, 99, 112)",
               fontWeight: 300,
               lineHeight: "20px",
            }}
         >
            {ingredients}
         </Typography>
      </Box>
   );
}
