import { RootState } from "@slices/store";

export const selectProductsPizza = (state: RootState) => state.productsCatalog.products.pizza;

export const selectProductsCombos = (state: RootState) => state.productsCatalog.products.combos;

export const selectProductsSnacks = (state: RootState) => state.productsCatalog.products.snacks;

export const selectProductsCocktails = (state: RootState) =>
   state.productsCatalog.products.cocktails;

export const selectProductsCoffee = (state: RootState) => state.productsCatalog.products.coffee;

export const selectProductsChildrenLove = (state: RootState) =>
   state.productsCatalog.products.childrenLove;

export const selectProductsBeverages = (state: RootState) =>
   state.productsCatalog.products.beverages;

export const selectProductsSauces = (state: RootState) => state.productsCatalog.products.sauces;

export const selectProductsOthers = (state: RootState) => state.productsCatalog.products.others;
