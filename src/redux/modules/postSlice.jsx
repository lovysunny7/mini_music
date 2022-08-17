import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { __getAll, __getOnePost } from "../asyncThunk/asyncPost";


const initialState = {
  ishiddenPost: false,
  list: [],
  tmp: {},
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    updateIshidden: (state, action) => {
      state.ishiddenPost = action.payload;
    },
  },
  
  extraReducers:  (builder) => {
    builder.addCase(__getOnePost.fulfilled, (state, action) => {
        state.tmp = action.payload;
        return state.tmp;
    })
    builder.addCase(__getAll.fulfilled, (state, action) => {
        // state.postList = [...state.postList,action.payload];
        // console.log('redux', action.payload);
        // return action.payload;
    })
},
});

export const {updateIshidden}= postSlice.actions;
export default postSlice.reducer;
