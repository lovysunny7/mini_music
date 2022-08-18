import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import apis from "../../api/axios";
import { __getAll, __getOnePost } from "../asyncThunk/asyncPost";

const initialState = {
  comments: [],
  tmp: {},
};

// 코멘트 정보 불러오기
export const loadCommentAX = (postId) => {
  // console.log("postId", postId);
  return function (dispatch) {
    apis.post_view2(postId)
      .then((res) => dispatch(loadComments(res.data.data.commentListSimple)));
  };
};

// 코멘트 정보 삭제하기
export const deleteCommentAX = (postId, commentId) => {
  // console.log(postId, commentId);
  return function (dispatch, getState) {
    apis.com_del2(postId, commentId).then((res) => console.log(res)); 
    const comment_list = useSelector((state)=>state.post.comments)
    console.log('삭제용 코멘트 작성중', comment_list);
    const comment_index = comment_list.findIndex((c) => {
      return c.commentId === commentId;
    });
    // console.log(comment_index)
    dispatch(deleteComment(commentId));
  };
};
export const createCommentAX = (postId,new_comment) => {
  return function (dispatch) {
    const comment = {
      comment : new_comment.comment,
    }
    // console.log('입력', comment)
      apis.com_write2(postId,comment)
    .then(() => dispatch(createComment(new_comment)))
  }
}

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    loadComments: (state, action) => {
      // console.log(action.payload);
      state.comments = action.payload;
    },
    deleteComment: (state, action) => {
      const new_comments_list = state.comments.filter((c, idx) => {
        console.log(new_comments_list)
        return parseInt(action.payload.commentId) !== idx;
      });
      state.comments = new_comments_list;
    },
    createComment: (state, action) => {
      console.log(action.comment);
      const new_comment =[...state.comments, action.comment];
      state.comments = new_comment;
    }
    
  },

  extraReducers: (builder) => {
    builder.addCase(__getOnePost.fulfilled, (state, action) => {
      state.tmp = action.payload;
      return state.tmp;
    });
    builder.addCase(__getAll.fulfilled, (state, action) => {
      // state.postList = [...state.postList,action.payload];
      // return state.postList;
    });
  },
});

export const { loadComments,deleteComment,createComment } = postSlice.actions;
export default postSlice.reducer;
