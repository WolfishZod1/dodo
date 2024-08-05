import { selectProductsOthers } from "@selectors/productsCatalog.selectors";
import { useSelector } from "react-redux";

interface Props {
   id: number;
}

export function CallProductsOthers({ id }: Props) {
   return useSelector(selectProductsOthers)[id];
}
