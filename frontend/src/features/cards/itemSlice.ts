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
  }
);

export const changeItem = createAsyncThunk(
  'items/changeItem',
  async (itemData:
    { itemId: number, price: string, amount: number }) => {
    const data = await apiAdmin.changeItem(itemData);
    if (data.itemId) return data;
    throw new Error(data.error);
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
      })
      .addCase(changeItem.fulfilled, (state: ItemState, action) => {
        state.items = state.items.map((el) => (el.id === action.payload.itemId) ?
        { ...el, price: action.payload.price, amount: action.payload.amount } : el);
      });
  },
  }
);

// eslint-disable-next-line no-empty-pattern
export const { } = cardSlice.actions;

export default cardSlice.reducer;
