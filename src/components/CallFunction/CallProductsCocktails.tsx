import { selectProductsCocktails } from "@selectors/productsCatalog.selectors";
import { useSelector } from "react-redux";

export function CallProductsCocktails() {
   return useSelector(selectProductsCocktails);
}
