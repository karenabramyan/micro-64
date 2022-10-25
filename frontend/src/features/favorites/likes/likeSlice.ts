import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import LikeState from '../types/LikeState';
import Like from '../types/Like';
// import ItemState from './types/ItemState';
import LikData from '../types/LikData';

const initialState = {
  likes: [],
};

export const loadLikes = createAsyncThunk('likes/loadLikes', () =>
  api.loadLikes()
);

export const createLikes = createAsyncThunk(
  'likes/createLikes',
  async (likData: LikData): Promise<{like?: Like, status?: string, itemId?: number}> => {
    const newLike = await api.createLike(likData);
    if (newLike.like) {
      return newLike;
    }
    return newLike;
  }
);

// export const addToLike = createAsyncThunk('/likes', api.)

export const removeLike = createAsyncThunk(
  'likes/removeLikes',
  async (likData: LikData) => {
    const data = await api.removeLike(likData);
    if (data.itemId) return data.itemId;
  }
);

const likeSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadLikes.fulfilled, (state: LikeState, action) => {
        state.likes = action.payload;
      })
      .addCase(createLikes.fulfilled, (state: LikeState, action) => {
        // console.log(action.payload);

        if (action.payload.like) {
          console.log(action.payload.like)
          console.log(state.likes)
          // state.likes.push();
        }
        if (action.payload.status === 'destroy') {
          state.likes = state.likes.filter((l) => l.id !== action.payload.itemId);
        }
      })
      // .addCase(removeLike.fulfilled, (state, action) => {
      //   state.likes = state.likes.filter((l) => l !== action.payload);
      // });
  },
});

export default likeSlice.reducer;
