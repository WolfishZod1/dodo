import { Link, Stack } from "@mui/material";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "@components/AppBar/linkProducts.css";

export function LinkProducts() {
   return (
      <Stack
         direction="row"
         spacing={2.5}
         sx={{
            width: "896px",

            underline: "none",
         }}
      >
         <AnchorLink
            href="#pizza"
            style={{ color: "black" }}
         >
            <Link>Пиццы</Link>
         </AnchorLink>
         <AnchorLink href="#combo">
            <Link>Комбо</Link>
         </AnchorLink>
         <AnchorLink href="#snacks">
            <Link>Закуски</Link>
         </AnchorLink>
         <AnchorLink href="#cocktails">
            <Link>Коктейли</Link>
         </AnchorLink>
         <AnchorLink href="#coffee">
            <Link>Кофе</Link>
         </AnchorLink>
         <AnchorLink href="#dessert">
            <Link>Десерты</Link>
         </AnchorLink>
         <AnchorLink href="#childrenLove">
            <Link>Любят дети</Link>
         </AnchorLink>
         <AnchorLink href="#beverages">
            <Link>Напитки</Link>
         </AnchorLink>
         <AnchorLink href="#sauces">
            <Link>Соусы</Link>
         </AnchorLink>
         <AnchorLink href="#other">
            <Link>Другие товары</Link>
         </AnchorLink>
         <Link>Акции</Link>
      </Stack>
   );
}
