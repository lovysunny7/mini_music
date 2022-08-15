import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import apis from "../../api/axios";


export const __getOnePost = createAsyncThunk(
    '/api/post/view',
    async (payload, thunkAPI) => {
      try {
        await apis.post_view(payload).then((res)=>{
            console.log(res);
        })
          console.log('조회완료');
        } catch (error) {
          console.log(error);
          return thunkAPI.rejectWithValue;
        }
      } 
);

export const __getAll = createAsyncThunk(
  '/api/post/viewall',
  async () => {
      try {
      const {data} = await apis.post_all();
          console.log(data)
          return data;
      }catch(error){
        // return thunkAPI.rejectWithValue;
        console.log('실패')
      }
    }
);