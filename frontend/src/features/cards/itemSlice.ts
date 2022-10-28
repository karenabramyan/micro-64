import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import * as apiAdmin from '../adminCab/apiAdmin';
import ItemState from './types/ItemState';
import Item from './types/Item';

const initialState = {
  items: []
};

export const loadCards = createAsyncThunk(
  'items/loadItems',
  () => api.loadItems()
);

export const loadRentCards = createAsyncThunk(
  'items/loadRentItems',
  () => api.loadItems()
);

export const loadBuyCards = createAsyncThunk(
  'items/loadBuyItems',
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
  reducers: {
    sortUp: (state) => {
      state.items.sort((a: Item, b: Item) => (Number(b.price) - Number(a.price)));
    },
    sortDown: (state) => {
      state.items.sort((a: Item, b: Item) => (Number(a.price) - Number(b.price)));
    }
    },
  extraReducers: (builder) => {
    builder
      .addCase(loadCards.fulfilled, (state: ItemState, action) => {
        state.items = action.payload;
      })
      .addCase(loadRentCards.fulfilled, (state: ItemState, action) => {
        state.items = action.payload.filter((el) => el.type === 'Аренда');
      })
      .addCase(loadBuyCards.fulfilled, (state: ItemState, action) => {
        state.items = action.payload.filter((el) => el.type !== 'Аренда');
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
export const { sortUp, sortDown } = cardSlice.actions;

export default cardSlice.reducer;
