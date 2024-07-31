import { configureStore } from "@reduxjs/toolkit";
import { productsCatalogSlice } from "./productsCatalog.slice/productsCatalog.slice";
import { useDispatch } from "react-redux";

export const store = configureStore({
   reducer: {
      [productsCatalogSlice.name]: productsCatalogSlice.reducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
