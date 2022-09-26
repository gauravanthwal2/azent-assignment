import { createSlice } from "@reduxjs/toolkit";
import allCountries from "../../../data/counties.json";

const initialState = {
  countries: allCountries?.countries || [],
  selectedCountry: allCountries?.countries[0] || {},
};

export const countrySlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setSelectedCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
  },
});

export const { setSelectedCountry } = countrySlice.actions;

export default countrySlice.reducer;
