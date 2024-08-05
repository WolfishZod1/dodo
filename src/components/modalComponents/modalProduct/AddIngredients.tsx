import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material";

export function AddIngredients() {
   return (
      <Box sx={{ padding: "14px 0px 24px" }}>
         <Typography
            variant="h6"
            sx={{ lineHeight: "24px", marginBottom: "12px" }}
         >
            Добавить по вкусу
         </Typography>
         <FormGroup>
            <FormControlLabel
               control={<Checkbox />}
               label="Сырный бортик"
            />
            <FormControlLabel
               control={<Checkbox />}
               label="Острый халапеньо"
            />
            <FormControlLabel
               control={<Checkbox />}
               label="Пикантная пепперони"
            />
         </FormGroup>
      </Box>
   );
}
