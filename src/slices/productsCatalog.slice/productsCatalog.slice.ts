import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productsCatalog.thunks";

interface ProductsCatalogState {
   products: ProductsCatalog;
}

const initialState: ProductsCatalogState = {
   products: {
      pizza: [],
      combos: [],
      snacks: [],
      cocktails: [],
      coffee: [],
      childrenLove: [],
      beverages: [],
      sauces: [],
      others: [],
   },
};

export const productsCatalogSlice = createSlice({
   name: "productsCatalog",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
         state.products = payload;
      });
   },
});
