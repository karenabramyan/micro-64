import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as api from './api';
import Item from './types/Item';
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
          })
}});

export const {  } = cardSlice.actions;

export default cardSlice.reducer;
