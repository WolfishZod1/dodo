import { SmallCross } from "@components/SvgIcon/SmallCross";
import { Box, Button, Drawer, Typography } from "@mui/material";
import { Sauce } from "./Sauce";
import { useSelector } from "react-redux";
import { selectProductsSauces } from "@selectors/productsCatalog.selectors";

interface Props {
   open: boolean;
   onClose: () => void;
}

export function Sauces({ open, onClose }: Props) {
   const sauces = useSelector(selectProductsSauces);
   return (
      <Drawer
         open={open}
         anchor="right"
      >
         <Box
            sx={{
               width: "382px",
               backgroundColor: "rgb(255, 255, 255)",
               padding: "0px 24px 40px",
               borderRadius: "9px 9px 0px 0px",
            }}
         >
            <Button
               variant="outlined"
               sx={{
                  position: "absolute",
                  top: "16px",
                  right: "24px",
                  width: "16px",
                  minWidth: "0px",
                  height: "16px",
                  padding: "0px",
               }}
               onClick={() => onClose()}
            >
               <SmallCross />
            </Button>
            <Typography
               variant="h6"
               sx={{ margin: "48px 0px 8px", lineHeight: "24px", fontWeight: 600 }}
            >
               Соусы к бортикам и закускам
            </Typography>
            {sauces.map((sauce, i) => (
               <Sauce
                  price={sauce.price}
                  picture={sauce.picture}
                  name={sauce.name}
                  id={i}
                  key={i}
                  onClose={onClose}
               />
            ))}
         </Box>
      </Drawer>
   );
}
