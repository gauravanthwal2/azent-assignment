import { createSlice } from "@reduxjs/toolkit";
import allEvents from "../../../data/events.json";

const initialState = {
  events: allEvents.events || [],
  selecetdEvent: {},
};

export const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
});

export const {} = eventSlice.actions;

export default eventSlice.reducer;
