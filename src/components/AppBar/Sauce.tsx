import { Box, Button, Typography } from "@mui/material";
import { putProduct } from "@slices/productsBasket.slice/productsBasket.slice";
import { useAppDispatch } from "@slices/store";

interface Props {
   price: number;
   picture: string;
   name: string;
   id: number;
   onClose: () => void;
}

export function Sauce({ price, picture, name, id, onClose }: Props) {
   const dispatch = useAppDispatch();

   const handleClick = () => {
      dispatch(
         putProduct({
            id: id,
            dough: "традиционное",
            size: 30,
            price: price,
            type: "sauces",
            count: 1,
            standartPrice: price,
         }),
      );
      onClose();
   };
   return (
      <Box
         sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
         }}
      >
         <img
            src={picture}
            style={{ width: "64px", height: "64px" }}
         />
         <Typography
            sx={{ fontSize: "16px", margin: "0px 12px", lineHeight: "20px", fontWeight: 500 }}
         >
            {name}
         </Typography>
         <Button
            variant="text"
            sx={{
               height: "32px",
               padding: "8px 16px",
               fontSize: "14px",
               lineHeight: "16px",
               minWidth: "50px",
               width: "100px",
            }}
            onClick={handleClick}
         >
            {price} тг.
         </Button>
      </Box>
   );
}
