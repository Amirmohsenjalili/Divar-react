import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
    dark: boolean;
}

const initialState: ThemeState = {
    dark: false,
} 

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        themetoggle: (state: ThemeState) => {
            state.dark = !state.dark;
        }
    }
})

export default themeSlice.reducer;
export const { themetoggle } = themeSlice.actions;