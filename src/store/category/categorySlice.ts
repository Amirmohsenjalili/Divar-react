import { createSlice } from "@reduxjs/toolkit";

interface CategoryState {
  showButton: boolean;
}

const initialState: CategoryState = {
    showButton: false,
  }

  const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        toggle: (state: CategoryState) => {
            state.showButton = !state.showButton;
        },
    }
  })

  export default categorySlice.reducer;
  export const { toggle } = categorySlice.actions;