import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contacts/reducer";

export const store = configureStore({
  reducer: {
    contact: contactReducer,

  },
});