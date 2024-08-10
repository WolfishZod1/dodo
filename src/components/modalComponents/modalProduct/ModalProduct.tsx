import { Modal, Box, Typography } from "@mui/material";
import { CloseButton } from "./CloseButton";
import { DispatchToBasket } from "./DispatchToBasket";
import SizeProductToggle from "./SizeProductToggle";
import TypeProductToggle from "./TypeProductToggle";
import { AddIngredients } from "./AddIngredients";
import { useSelector } from "react-redux";
import { PictureProduct } from "./PictureProduct";
import { useState } from "react";
import { selectProductsCatalogId } from "@selectors/productsCatalogId.selectors";

interface Props {
   open: boolean;
   onClose: () => void;
   id: number;
   type: ProductsCategories;
   change?: number;
}

export function ModalProduct({ open, onClose, id, type, change }: Props) {
   const [sizeProduct, setSizeProduct] = useState(30);

   const [dough, setDough] = useState("традиционное");

   const product = useSelector(selectProductsCatalogId(id, type));

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
                           {sizeProduct}, {dough} тесто{" "}
                           {dough === "тонкое" ? sizeProduct - 5 : sizeProduct},{" "}
                           {sizeProduct * 35 - 535} г
                        </Typography>
                        <Typography sx={{ marginBottom: "14px", lineHeight: "20px" }}>
                           {product.description}
                        </Typography>
                        <SizeProductToggle choiceSize={setSizeProduct} />
                        <TypeProductToggle choiceType={setDough} />
                        <AddIngredients />
                     </Box>
                  </Box>
                  <DispatchToBasket
                     price={
                        sizeProduct === 25
                           ? product.price
                           : sizeProduct === 30
                             ? product.price * 1.5
                             : product.price * 1.9
                     }
                     id={id}
                     type={type}
                     dough={dough}
                     size={sizeProduct}
                     onClose={onClose}
                     change={change}
                  />
               </Box>
            </Box>
            <CloseButton onClose={onClose} />
         </Box>
      </Modal>
   );
}
