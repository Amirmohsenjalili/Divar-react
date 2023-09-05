import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    dark: false,
} 

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        themetoggle: (state) => {
            state.dark = !state.dark;
        }
    }
})

export default themeSlice.reducer;
export const { themetoggle } = themeSlice.actions;