import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productsCatalog.thunks";

interface ProductsCatalogState {
   products: Product[];
}

const initialState: ProductsCatalogState = {
   products: [],
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
