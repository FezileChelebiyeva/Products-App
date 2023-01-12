import { configureStore } from "@reduxjs/toolkit";
import getProductDataSlice from "./slice/getData";

export const store = configureStore({
  reducer: {
    products: getProductDataSlice,
  },
});
