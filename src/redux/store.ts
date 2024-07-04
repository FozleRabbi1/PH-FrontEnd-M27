import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./fetures/auth/authSlice";
import { baseApi } from "./api/baseApi";

export const store = configureStore({
  reducer: {
    // [baseApi.reducerPath] এর মানে baseApi এর মধ্যে যেই reducerPath Name দেয়া হয়েছে সেটি
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
