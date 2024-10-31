import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: 'searchTerm',
  initialState: {
    searchTerm: ''
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload.term
    }
  }
})

export const selectSearchTerm = (state) => state.searchTerm.searchTerm

export const { 
  setSearchTerm 
} = searchSlice.actions

export default searchSlice.reducer