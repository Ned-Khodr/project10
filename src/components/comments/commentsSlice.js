import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: {}                                      //comments is multiple lists of comments keyed by postId
  },
  reducers: {
    addComments: (state, action) => {
      const postId = action.payload.postId                //payload is postId, list of comments for a postId
      const postComments = action.payload.comments
      state.comments[postId] = postComments
    }
  }
})

export const selectCommentsByPostId = (postId) => {
  return (state) => {
    return state.comments.comments[postId]
  }
}

export const selectComments = (state) => {
  return state.comments.comments
}

export const { 
  addComments
} = commentsSlice.actions

export default commentsSlice.reducer