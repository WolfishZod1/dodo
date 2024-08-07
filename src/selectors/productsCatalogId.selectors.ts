import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@slices/store";

const selectProductsCatalog = (state: RootState) => state.productsCatalog.products;

export const selectProductsCatalogId = (id: number, type: ProductsCategories) =>
   createSelector(selectProductsCatalog, (products) => products[type].find((p, i) => i === id));
