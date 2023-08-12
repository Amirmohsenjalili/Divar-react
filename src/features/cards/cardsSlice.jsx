import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  cards: [],
  error: "",
};

const fetchData = createAsyncThunk("cards/fetchData", async() => {
  const response = await axios.post("/api",{
     page: 3,
     json_schema: {category: {value: "ROOT"},
     cities: ["1"]},
     last_post_date: 1691579787575012
    })
   return await response.data.web_widgets.post_list;
})


const cardsSlice = createSlice({
  name: "cards",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.cards = action.payload;
      state.error = "";
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.cards = [];
      state.error = action.error.message;
    });
  },
});

export default cardsSlice.reducer;
export { fetchData };
