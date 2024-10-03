const initialState = 
{
    contacts: {
          items: []
      },
    filters: {
          name: ""
      }
  }

export const changeFilterReducer = (state = {initialState}, action) => {
    return state;
}

export const selectNameFilter = () => {};