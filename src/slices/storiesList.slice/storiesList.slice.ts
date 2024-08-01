import { createSlice } from "@reduxjs/toolkit";
import { fetchStories } from "./storiesList.thunks";

interface StoriesState {
   stories: Stories[];
}

const initialState: StoriesState = { stories: [] };

export const storiesListSlice = createSlice({
   name: "storiesList",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(fetchStories.fulfilled, (state, { payload }) => {
         state.stories = payload;
      });
   },
});
