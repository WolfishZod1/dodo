import { selectProductsBeverages } from "@selectors/productsCatalog.selectors";
import { useSelector } from "react-redux";

export function CallProductsBeverages() {
   return useSelector(selectProductsBeverages);
}
