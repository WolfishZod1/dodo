import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";

interface Props {
   choiceSize: (type: number) => void;
}

export default function SizeProductToggle({ choiceSize }: Props) {
   const [alignment, setAlignment] = React.useState<string | null>("center");

   const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
      setAlignment(newAlignment);
   };

   return (
      <ToggleButtonGroup
         value={alignment}
         exclusive
         onChange={handleAlignment}
         aria-label="text alignment"
         sx={{
            borderRadius: "9999px",
            backgroundColor: "rgb(243, 243, 247)",
            height: "32px",
            display: "flex",
            position: "relative",
            overflow: "hidden",
            margin: "8px 0px",
         }}
      >
         <ToggleButton
            value="left"
            aria-label="left aligned"
            sx={{ lineHeight: "32px", textTransform: "capitalize", border: "0", width: "114px" }}
            onClick={() => choiceSize(25)}
         >
            Маленькая
         </ToggleButton>
         <ToggleButton
            value="center"
            aria-label="centered"
            sx={{ lineHeight: "32px", textTransform: "capitalize", border: "0", width: "114px" }}
            onClick={() => choiceSize(30)}
         >
            Средняя
         </ToggleButton>
         <ToggleButton
            value="right"
            aria-label="right aligned"
            sx={{ lineHeight: "32px", textTransform: "capitalize", border: "0", width: "114px" }}
            onClick={() => choiceSize(35)}
         >
            Большая
         </ToggleButton>
      </ToggleButtonGroup>
   );
}
