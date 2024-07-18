import { Link, Stack } from "@mui/material";

export function LinkProducts() {
   return (
      <Stack
         direction="row"
         spacing={2.5}
         sx={{
            width: "896px",
         }}
      >
         <Link>Пиццы</Link>
         <Link>Комбо</Link>
         <Link>Закуски</Link>
         <Link>Коктейли</Link>
         <Link>Кофе</Link>
         <Link>Десерты</Link>
         <Link>Любят дети</Link>
         <Link>Напитки</Link>
         <Link>Соусы</Link>
         <Link>Другие товары</Link>
         <Link>Акции</Link>
      </Stack>
   );
}
