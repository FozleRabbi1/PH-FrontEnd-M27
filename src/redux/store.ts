import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./fetures/auth/authSlice";
import { baseApi } from "./api/baseApi";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  //===>> এর সাহাজ্জেই local storege এর মধ্যে token set হয়
  key: "auth",
  storage,
};
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    // [baseApi.reducerPath] এর মানে baseApi এর মধ্যে যেই reducerPath Name দেয়া হয়েছে সেটি
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);

// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./fetures/auth/authSlice";
// import { baseApi } from "./api/baseApi";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "auth",
//   storage,
// };
// const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// export const store = configureStore({
//   reducer: {
//     [baseApi.reducerPath]: baseApi.reducer,
//     auth: persistedAuthReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }).concat(baseApi.middleware),
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const persistor = persistStore(store);
