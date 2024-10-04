import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactsSlise";
import { changeFilterReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
      contacts: contactReducer,
  },
});


