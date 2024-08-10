import { Box, Typography } from "@mui/material";
import { selectProductsCatalogId } from "@selectors/productsCatalogId.selectors";
import { useSelector } from "react-redux";

interface Props {
   size: number;
   dough: string;
   id: number;
   type: ProductsCategories;
}

export function FillingInfo({ size, dough, id, type }: Props) {
   const product = useSelector(selectProductsCatalogId(id, type));

   return (
      <Box
         sx={{
            display: "flex",
            borderBottom: "1px solid rgb(226, 226, 233)",
            paddingBottom: "12px",
         }}
      >
         <img
            style={{ width: "64px", height: "64px", marginRight: "16px" }}
            src={product?.picture}
         />
         <Box sx={{ display: "flex", flexFlow: "column" }}>
            <Typography
               sx={{ fontWeight: 600, fontSize: "16px", lineHeight: "20px", marginBottom: "4px" }}
            >
               {product?.name}
            </Typography>
            <Typography
               sx={{
                  fontSize: "12px",
                  lineHeight: "16px",
                  color: "rgb(92, 99, 112)",
                  margin: "0px",
                  whiteSpace: "pre-wrap",
               }}
            >
               {size}, {dough} тесто {dough === "тонкое" ? size - 5 : size}, {size * 35 - 535} г
            </Typography>
         </Box>
      </Box>
   );
}
