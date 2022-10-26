import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import * as apiAdmin from '../adminCab/apiAdmin';
import ItemState from './types/ItemState';

const initialState = {
  items: []
};

export const loadCards = createAsyncThunk(
  'items/loadItems',
  () => api.loadItems()
);

export const removeItem = createAsyncThunk(
  'items/deleteItem',
  async (itemId: number) => {
    const data = await apiAdmin.deleteAdminItem(itemId);
    if (data.itemId) return data.itemId;
    // throw new Error(data.status)
  }
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
      .addCase(removeItem.fulfilled, (state: ItemState, action) => {
        state.items = state.items.filter((i) => i.id !== Number(action.payload));
      });
  },
  }
);

// eslint-disable-next-line no-empty-pattern
export const { } = cardSlice.actions;

export default cardSlice.reducer;
