import { selectProductsChildrenLove } from "@selectors/productsCatalog.selectors";
import { useSelector } from "react-redux";

export function CallProductsChildrenLove() {
   return useSelector(selectProductsChildrenLove);
}
