import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { __getAll, __getOnePost } from "../asyncThunk/asyncPost";


const initialState = {
  ishiddenPost: false,
  postList: [],
  tmp: {},
  loginStatus :false,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    updateIshidden: (state, action) => {
      state.ishiddenPost = action.payload;
    },
    updateLogin:(state, action) => {
      state.loginStatus = action.payload;
    }
  },
  
  extraReducers:  (builder) => {
    builder.addCase(__getOnePost.fulfilled, (state, action) => {
        state.tmp = action.payload;
        return state.tmp;
    })
    builder.addCase(__getAll.fulfilled, (state, action) => {
        // state.postList = [...state.postList,action.payload];
        // return state.postList;
    })
},
});

export const {updateIshidden, updateLogin}= postSlice.actions;
export default postSlice.reducer;
