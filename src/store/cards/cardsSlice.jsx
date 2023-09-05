import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  cards: [],
  error: "",
  page: 1,
  lastPostDate: 1693322601442276,
  hasMore: true,
};
 
const fetchData = createAsyncThunk("cards/fetchData", async(_, thunkAPI) => {
  const state = thunkAPI.getState();
  const { page, lastPostDate, cards } = state.cards;
  const response = await axios.post("/api",{
    page: page,
    json_schema: {category: {value: "ROOT"},
    cities: ["1"]},
    last_post_date: lastPostDate,
  });

  const newLastPostDate = response.data.last_post_date;
  const newCards = [...cards, ...response.data.web_widgets.post_list];
  const newPage = page + 1;
  const newHasMore = response.data.web_widgets.post_list.length > 0;
 
  return {
      lastPostDate: newLastPostDate,
      cards: newCards,
      page: newPage,
      hasMore: newHasMore,
    };
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
      state.cards = action.payload.cards;
      state.page = action.payload.page;
      state.lastPostDate = action.payload.lastPostDate;
      state.hasMore = action.payload.hasMore;
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