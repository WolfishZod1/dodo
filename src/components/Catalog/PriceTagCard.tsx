import { ModalProduct } from "@components/modalComponents/modalProduct/ModalProduct";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

interface Props {
   price: number;
   id: number;
   type: ProductsCategories;
}

export function PriceTagCard({ price, id, type }: Props) {
   const [open, setOpen] = useState(false);

   const onClose = () => setOpen(false);

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
         <Button
            variant="text"
            onClick={() => {
               setOpen(true);
            }}
         >
            Выбрать
         </Button>

         <ModalProduct
            open={open}
            onClose={onClose}
            id={id}
            type={type}
         />
      </Box>
   );
}
