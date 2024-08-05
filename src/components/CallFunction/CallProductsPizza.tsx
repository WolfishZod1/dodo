import { selectProductsPizza } from "@selectors/productsCatalog.selectors";
import { useSelector } from "react-redux";

export function CallProductsPizza() {
   return useSelector(selectProductsPizza)[1];
}
