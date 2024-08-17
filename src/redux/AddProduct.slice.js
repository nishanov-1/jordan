import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product1: JSON.parse(localStorage.getItem("product")) || [],
};

export const addProductSlice = createSlice({
  name: "ADD_PRODUCT",
  initialState,
  reducers: {
    addProduct(state, action) {
      localStorage.setItem(
        "product",
        JSON.stringify([...state.product1, action.payload])
      );
      state.product1 = [...state.product1, action.payload];
    },
  },
});
export const { addProduct } = addProductSlice.actions;
export default addProductSlice.reducer;
