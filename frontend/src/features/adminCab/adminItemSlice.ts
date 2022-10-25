import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ItemState from '../cards/types/ItemState';
import AdminItem from './AdminItem';
import * as api from './apiAdmin';

const initialState: ItemState = {
  items: []
};

// eslint-disable-next-line import/prefer-default-export
export const removeItem = createAsyncThunk(
  'items/deleteItem',
  async (itemId: number) => {
    const data = await api.deleteAdminItem(itemId);
    if (data.itemId) return data.itemId;
    // throw new Error(data.status)
  }
);

const adminItemSlice = createSlice({
  name: 'adminItem',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(removeItem.fulfilled, (state: ItemState, action) => {
        state.items = state.items.filter((i) => i.id !== action.payload);
      });
  },

});

export default adminItemSlice.reducer;
