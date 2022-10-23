import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import ItemState from './types/ItemState';

const initialState = {
  items: []
};

export const loadCards = createAsyncThunk(
  'students/loadStudents',
  () => api.loadItems()
);

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCards.fulfilled, (state: ItemState, action) => {
        state.items = action.payload;
      });
  }
});

// eslint-disable-next-line no-empty-pattern
export const { } = cardSlice.actions;

export default cardSlice.reducer;
