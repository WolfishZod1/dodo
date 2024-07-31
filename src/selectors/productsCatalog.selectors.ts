import { RootState } from "@slices/store";

export const selectProducts = (state: RootState) => state.productsCatalog.products;
