import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import LikeState from '../types/LikeState';
import Like from '../types/Like';
// import ItemState from './types/ItemState';
import LikData from '../types/LikData';

const initialState = {
  likes: [],
};

export const loadLikes = createAsyncThunk(
    'likes/loadLikes',
    () => api.loadLikes()
);

export const createLikes = createAsyncThunk(
    'likes/createLikes',
    async (likData: LikData): Promise<{ like?: Like }> => {
        const newLike = await api.createLike(likData);
        if (newLike.like) {
            return { like: newLike.like };
        }
        return newLike;
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
            if (action.payload.like) {
                state.likes.push(action.payload.like);
            }
        });
    }
});

export default likeSlice.reducer;
