import { RootState } from "@slices/store";

export const selectProductBasket = (state: RootState) => state.productsBasket.products;

export const selectProductsCount = (state: RootState) =>
   state.productsBasket.products.reduce((prev, p) => (prev += p.count), 0);

export const selectProductCount = (index: number) => (state: RootState) =>
   state.productsBasket.products[index].count;

export const selectProductPrice = (state: RootState) =>
   state.productsBasket.products.reduce((prev, p) => (prev += p.price), 0);
