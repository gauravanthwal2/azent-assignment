import { configureStore } from "@reduxjs/toolkit";

import countriesReducer from "./features/countries/coutrySlice";
import eventsReducer from "./features/events/eventSlice";

const store = configureStore({
  reducer: {
    events: eventsReducer,
    countries: countriesReducer,
  },
});

export default store;
