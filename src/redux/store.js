import { configureStore } from "@reduxjs/toolkit";
import AddProductSlice from "./AddProduct.slice";

export const store = configureStore({
  reducer: {
    addProduct: AddProductSlice,
  },
});
