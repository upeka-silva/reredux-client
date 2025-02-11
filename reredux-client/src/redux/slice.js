import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../api/api";

export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  const API_KEY = "7b18baf4d7174a108438c839b3ef336a";
  try {
    let response = await instance.get(
      `v2/top-headlines?country=us&category=business&pageSize=20&page=1&apiKey=${API_KEY}`
    );
    return response.data.articles;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  articles: [],
  loading: false,
  error: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
