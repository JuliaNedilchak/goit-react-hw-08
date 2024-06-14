//import { contactsReducer } from "./contacts/slice";
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
import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filters/slice";
import { authReducer } from "./auth/slice";
import { phonebookReducer } from "./contactss/slice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
  //   blacklist: ['contacts', "isError", "isLoading", "productData"],
};
export const store = configureStore({
  reducer: {
    // contactbox: contactsReducer,
    filterbox: filterReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    phonebook: phonebookReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
