import { configureStore } from "@reduxjs/toolkit";
import atmSlicer from "./atmSlicer";

const store = configureStore({
  reducer: {
    atm: atmSlicer,
  },
});

export default store;

