import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../components/redux/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
