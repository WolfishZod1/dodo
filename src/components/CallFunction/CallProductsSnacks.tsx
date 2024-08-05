import { selectProductsSnacks } from "@selectors/productsCatalog.selectors";
import { useSelector } from "react-redux";

interface Props {
   id: number;
}

export function CallProductsSnacks({ id }: Props) {
   return useSelector(selectProductsSnacks)[id];
}
