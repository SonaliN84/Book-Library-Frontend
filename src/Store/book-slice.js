import { createSlice } from "@reduxjs/toolkit";

const initialBookState = {
    books:[],
    pendingBooks:[],
}

const bookSlice = createSlice({
    name: "book",
    initialState: initialBookState,
    reducers: {
      setBooks(state, action) {
        state.books = action.payload;
      },
      setpendingBooks(state,action){
        state.pendingBooks = action.payload;
      }
    }
})

export const bookActions = bookSlice.actions;
export default bookSlice.reducer;

