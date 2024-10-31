import { createSlice } from "@reduxjs/toolkit";
import { addComments } from '../comments/commentsSlice'

const postsSlice = createSlice({
  name: 'searchTerm',
  initialState: {
    posts: {}
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(addComments, (state, action) => {
      const postComments = action.payload.comments
      const postId = action.payload.postId
      const commentIds = postComments.map(comment => comment.id)
      state.posts[postId].comments = commentIds
    })
  }
})

export const selectPosts = (state) => state.posts.posts

export const { 
  setPosts
} = postsSlice.actions

export default postsSlice.reducer