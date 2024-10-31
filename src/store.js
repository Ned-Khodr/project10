import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./components/search/searchSlice";
import subredditReducer from "./components/sideBar/subbredditSlice";
import postsReducer from "./components/posts/postsSlice";
import commentsReducer from "./components/comments/commentsSlice";

export default configureStore({
  reducer: {
    searchTerm: searchReducer,
    subreddit: subredditReducer,
    posts: postsReducer,
    comments: commentsReducer,
  },
})