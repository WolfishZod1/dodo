import { selectProductsSauces } from "@selectors/productsCatalog.selectors";
import { useSelector } from "react-redux";

export function CallProductsSauces() {
   return useSelector(selectProductsSauces);
}
