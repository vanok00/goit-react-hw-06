import { createSlice } from "@reduxjs/toolkit"


const initialState =  {
  filters: ""
}


  const slice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        changeFilter: (state, action) => {
            state.filters = action.payload;
        }
    },
  })

  export const filterReducer = slice.reducer;
  export const {changeFilter} = slice.actions;
export const selectNameFilter = state => state.filters.filters


  