import { configureStore } from "@reduxjs/toolkit";
import { addContactReducer, deleteContactReducer } from "./contactsSlise";
import { changeFilterReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
      addcontacts: addContactReducer,
      deletecontacts: deleteContactReducer,
      changefilterreducer: changeFilterReducer,
  },
});


