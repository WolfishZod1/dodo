import { selectProductsCoffee } from "@selectors/productsCatalog.selectors";
import { useSelector } from "react-redux";

export function CallProductsCoffee() {
   return useSelector(selectProductsCoffee);
}
