import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { __getOnePost } from "../asyncThunk/asyncPost";

const initialState = {
  ishiddenPost: false,
  posetList: [],
  tmp: {},
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    showIshidden: (state) => {
    //  return(ishiddenPost);
    },
    updateIshidden: (state, action) => {
      state.ishiddenPost = action.payload;
    },
    createPost: (state, action) => {
      state.cafeList.push(action.payload);
    },
    deletPost: (state, action) => {
      const idx = action.payload;
      return {
        ...state,
        postList: state.posetList.filter((e) => e.postId !== idx),
      };
    },
  },
  extraReducers: {
    [__getOnePost.pending]: (state, action) => {
      // console.log("pending 상태", state, action); // Promise가 pending일때 dispatch
    },
    [__getOnePost.fulfilled]: (state, action) => {
      // console.log("fulfilled 상태", state, action);
    //   state.cafeList  = action.payload; // Promise가 fullfilled일 때 dispatch
      // console.log(state.cafeList);
    },
    [__getOnePost.rejected]: (state, action) => {
      // console.log("rejected 상태", state, action); // Promise가 rejected일 때 dispatch
    },
  },
});

export const {showIshidden, updateIshidden}= postSlice.actions;
export default postSlice.reducer;
