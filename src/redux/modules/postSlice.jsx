import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { __getAll, __getOnePost } from "../asyncThunk/asyncPost";


const initialState = {
  ishiddenPost: false,
  postList: [],
  tmp: {},
  delPostId : '',
};

const postSlice = createSlice({
  name: 'post',
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
    deletPostId: (state, action) => {
      state.delPostId = action.payload;
     ;
    },
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

export const {showIshidden, updateIshidden, deletPostId}= postSlice.actions;
export default postSlice.reducer;
