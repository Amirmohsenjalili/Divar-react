// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   loading: false,
//   cards: [],
//   error: "",
// };

// let page = 1;
// let lastPostDate = 1692005908678742;
// const fetchData = createAsyncThunk("cards/fetchData", async() => {
//   const response = await axios.post("/api",{
//     page: page,
//     json_schema: {category: {value: "ROOT"},
//     cities: ["1"]},
//     last_post_date: lastPostDate
//   })
//   lastPostDate = response.data.last_post_date;

//   return {
//       lastPostDate: lastPostDate,
//       data: response.data.web_widgets.post_list,
//       page: page++,
//     };
    
//   })



// const cardsSlice = createSlice({
//   name: "cards",
//   initialState,
//   extraReducers: (builder) => {
//     builder.addCase(fetchData.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(fetchData.fulfilled, (state, action) => {
//       state.loading = false;
//       state.cards = action.payload.data;
//       state.error = "";
//     });
//     builder.addCase(fetchData.rejected, (state, action) => {
//       state.loading = false;
//       state.cards = [];
//       state.error = action.error.message;
//     });
//   },
// });

// export default cardsSlice.reducer;
// export { fetchData };
