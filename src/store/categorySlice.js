import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    menuOpen: false,
    selected: "ROOT",
    query: "",
    place: "",
    minPrice: "",
    maxPrice: "",
    photoOnly: false,
  },
  reducers: {
    toggleMenu(state) {
      state.menuOpen = !state.menuOpen;
    },
    closeMenu(state) {
      state.menuOpen = false;
    },
    setCategory(state, action) {
      state.selected = action.payload;
      state.menuOpen = false;
    },
    setQuery(state, action) {
      state.query = action.payload;
    },
    setPlace(state, action) {
      state.place = action.payload;
    },
    setMinPrice(state, action) {
      state.minPrice = action.payload;
    },
    setMaxPrice(state, action) {
      state.maxPrice = action.payload;
    },
    togglePhotoOnly(state) {
      state.photoOnly = !state.photoOnly;
    },
  },
});

export const {
  toggleMenu,
  closeMenu,
  setCategory,
  setQuery,
  setPlace,
  setMinPrice,
  setMaxPrice,
  togglePhotoOnly,
} = categorySlice.actions;

export default categorySlice.reducer;
