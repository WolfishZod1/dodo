import { Modal, Box, Typography } from "@mui/material";
import { CloseButton } from "./CloseButton";
import { DispatchToBasket } from "./DispatchToBasket";
import SizeProductToggle from "./SizeProductToggle";
import TypeProductToggle from "./TypeProductToggle";
import { AddIngredients } from "./AddIngredients";
import { useSelector } from "react-redux";
import { RootState } from "@slices/store";
import { PictureProduct } from "./PictureProduct";

interface Props {
   open: boolean;
   onClose: () => void;
   id: number;
   type: ProductsCategories;
}

export function ModalProduct({ open, onClose, id, type }: Props) {
   const product = useSelector((s: RootState) =>
      s.productsCatalog.products[type].find((p, i) => i === id),
   );

   if (!product) return null;

   return (
      <Modal
         open={open}
         disableEscapeKeyDown
         onClose={onClose}
      >
         <Box>
            <Box
               sx={{
                  display: "block",
                  position: "absolute",
                  top: "50%",
                  left: "49.5%",
                  marginRight: "-50%",
                  transform: "translate(-50%, -50%)",
                  width: "924px",
                  overflow: "hidden",
                  borderRadius: "20px",
                  backgroundColor: "rgb(255, 255, 255)",
               }}
            >
               <PictureProduct picture={product.picture} />
               <Box
                  sx={{
                     position: "relative",
                     float: "right",
                     verticalAlign: "top",
                     width: "394px",
                     height: "610px",
                     padding: "30px 0px",
                     background: "rgb(252, 252, 252)",
                  }}
               >
                  <Box
                     sx={{
                        minHeight: "478px",
                     }}
                  >
                     <Box sx={{ width: 400, padding: "0px 30px" }}>
                        <Typography
                           variant="h5"
                           sx={{ lineHeight: "34px" }}
                        >
                           {product.name}
                        </Typography>
                        <Typography
                           sx={{
                              padding: "1px 0px 5px",
                              color: "rgb(92, 99, 112)",
                              lineHeight: "20px",
                           }}
                        >
                           30, традиционное тесто 30, 510 г
                        </Typography>
                        <Typography sx={{ marginBottom: "14px", lineHeight: "20px" }}>
                           {product.description}
                        </Typography>
                        <SizeProductToggle />
                        <TypeProductToggle />
                        <AddIngredients />
                     </Box>
                  </Box>
                  <DispatchToBasket />
               </Box>
            </Box>
            <CloseButton onClose={onClose} />
         </Box>
      </Modal>
   );
}
