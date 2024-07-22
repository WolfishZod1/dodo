import { Box, Button, Typography } from "@mui/material";

interface Props {
   price: number;
}

export function PriceTagCard({ price }: Props) {
   return (
      <Box
         sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "16px",
         }}
      >
         <Typography
            variant="h6"
            sx={{
               display: "flex",
               flexFlow: "column",
               justifyContent: "center",
               paddingRight: "4px",
               fontWeight: 600,
               lineHeight: "22px",
            }}
         >
            от {price} тг.
         </Typography>
         <Button variant="text">Выбрать</Button>
      </Box>
   );
}
