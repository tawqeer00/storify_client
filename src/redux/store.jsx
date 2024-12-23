import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../redux/slice/authSlice"
import productReducer from "../redux/slice/productSlice"
import filterReducer from "../redux/slice/filterSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    filter: filterReducer,
  },
});
