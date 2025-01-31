import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useState } from "react";

interface Props {
   choiceType: (type: string) => void;
}

export default function TypeProductToggle({ choiceType }: Props) {
   const [alignment, setAlignment] = React.useState<string | null>("left");

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
            sx={{ lineHeight: "32px", textTransform: "capitalize", border: "0", width: "170px" }}
            onClick={() => choiceType("традиционное")}
         >
            Традиционное
         </ToggleButton>
         <ToggleButton
            value="right"
            aria-label="right aligned"
            sx={{ lineHeight: "32px", textTransform: "capitalize", border: "0", width: "170px" }}
            onClick={() => choiceType("тонкое")}
         >
            Тонкое
         </ToggleButton>
      </ToggleButtonGroup>
   );
}
