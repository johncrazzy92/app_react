import { configureStore } from "@reduxjs/toolkit";
import mangaPostReducer from "../reducers/mangaReducer";

export const store = configureStore({
  reducer: {
    mangaPostReducer,
  },
});
