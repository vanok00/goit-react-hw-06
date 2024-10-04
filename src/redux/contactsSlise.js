import { createSlice } from "@reduxjs/toolkit"

const initialState =  {
    contacts: [{items: 'Hello world', id: 1, completed: false}],
      };
  

  const slice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        deleteContact: (state, action) =>{
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
        }
    },
  })

export const selectContacts = state => state.contacts.contacts

  export const contactReducer = slice.reducer

  export const {deleteContact} = slice.actions
// export const addContactReducer = (state = {initialState}, action) => {
//     return state;
// }
// export const deleteContactReducer = (state = {initialState}, action) => {
//     return state;
// }

// export const createSlice = () => {}





