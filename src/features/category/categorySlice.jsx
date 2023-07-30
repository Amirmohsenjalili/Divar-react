import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    showButton: false,
  }

  const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        toggle: (state) => {
            state.showButton = !state.showButton;
        },
    }
  })

  export default categorySlice.reducer;
  export const { toggle } = categorySlice.actions;