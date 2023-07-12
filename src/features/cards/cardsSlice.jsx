import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    loading: false,
    cards: [],
    error: ""
};

const fetchCards = createAsyncThunk("cards/fetchCards", async() => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return await response.data;
})

const cardsSlice = createSlice({
    name: "cards",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCards.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchCards.fulfilled, (state, action) => {
            state.loading = false;
            state.cards = action.payload;
            state.error = "";
        });
        builder.addCase(fetchCards.rejected, (state, action) => {
            state.loading = false;
            state.cards = [];
            state.error = action.error.message;
        });
    },
});

export default cardsSlice.reducer;
export { fetchCards };