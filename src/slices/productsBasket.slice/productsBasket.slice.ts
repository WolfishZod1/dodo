import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductsBasketState {
   products: ProductBasket[];
}

const initialState: ProductsBasketState = {
   products: [],
};

export const productsBasketSlice = createSlice({
   name: "productsBasket",
   initialState,
   reducers: {
      putProduct(state, action: PayloadAction<ProductBasket>) {
         //Проврека, есть ли уже товар с такими входными данными

         // state.count++
         state.products.unshift(action.payload);
      },
      deleteProduct(state, action: PayloadAction<number>) {
         // state.count -= state.products[action.payload].count
         state.products.splice(action.payload, 1);
      },
      incrementProductCount(state, action: PayloadAction<number>) {
         const p = state.products.find((p) => p.price === action.payload);
         if (!p) return;

         p.count++;
         p.price += p.standartPrice;
         // state.products
      },
      decrementProductCount(state, { payload }: PayloadAction<number>) {
         const p = state.products.find((p) => p.price === payload);
         if (!p) return;

         p.price -= p.standartPrice;
         p.count--;
         // state.count--;
      },
   },
});

export const { deleteProduct } = productsBasketSlice.actions;
export const { putProduct } = productsBasketSlice.actions;
export const { incrementProductCount } = productsBasketSlice.actions;
export const { decrementProductCount } = productsBasketSlice.actions;
