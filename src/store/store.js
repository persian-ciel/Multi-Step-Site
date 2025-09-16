import { configureStore } from "@reduxjs/toolkit";
import billingReducer from "./billingSlice";

export const store = configureStore({
  reducer: {
    billing: billingReducer,
  },
});