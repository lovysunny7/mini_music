import { createAsyncThunk } from "@reduxjs/toolkit";
import apis from "../../api/axios";

export const __getOnePost = createAsyncThunk(
    '/api/post/view',
    async (payload, thunkAPI) => {
        try {
        apis.post_view(payload).then((res)=>{
            console.log(res);
        })
          console.log('조회완료');
        } catch (error) {
          console.log(error);
          return thunkAPI.rejectWithValue;
        }
      }

);