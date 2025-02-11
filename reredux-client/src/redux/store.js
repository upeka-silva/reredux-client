import { configureStore } from "@reduxjs/toolkit";

import newsReducer from "../redux/slice";

const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

export default store;
