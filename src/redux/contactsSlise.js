import { createSlice } from "@reduxjs/toolkit"

const initialState =  {
    contacts: [],
      };


  const slice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
        },
        addContact: (state, action) => {
          state.contacts.push(action.payload);
        }
    },
  })

export const selectContacts = state => state.contacts.contacts

  export const contactReducer = slice.reducer

  export const {deleteContact, addContact} = slice.actions







