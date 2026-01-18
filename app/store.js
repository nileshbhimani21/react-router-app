import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./context/authSlice";
import counterReducer from "./context/counterSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
  },
});
