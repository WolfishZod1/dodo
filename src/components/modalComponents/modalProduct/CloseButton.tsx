import { Cross } from "@components/SvgIcon/Сross";
import { Button } from "@mui/material";

interface Props {
   onClose: () => void;
}

export function CloseButton({ onClose }: Props) {
   return (
      <Button
         onClick={onClose}
         variant="outlined"
         sx={{ position: "absolute", top: "12%", right: "14.5%" }}
      >
         <Cross />
      </Button>
   );
}
