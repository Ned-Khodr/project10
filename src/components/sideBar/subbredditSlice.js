import { createSlice } from "@reduxjs/toolkit";
import { subreddits } from "../../data/initialData"

const subredditSlice = createSlice({
  name: 'subreddit',
  initialState: {
    subreddit: subreddits[8].name
  },
  reducers: {
    setSubreddit: (state, action) => {
      state.subreddit = action.payload
    }
  }
})

export const selectSubreddit = (state) => state.subreddit.subreddit

export const { 
  setSubreddit
} = subredditSlice.actions

export default subredditSlice.reducer