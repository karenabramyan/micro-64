import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AdminOrderState from './types/AdminOrderState';
import * as api from './apiAdmin';

const initialState: AdminOrderState = {
    orders: [],
  };

  // eslint-disable-next-line import/prefer-default-export
  export const loadOrders = createAsyncThunk(
    'orders/loadOrders',
    () => api.loadOrders()
  );

  const adminSlice = createSlice({
      name: 'basket',
      initialState,
      reducers: {},
      extraReducers: (builder) => {
          builder
            .addCase(loadOrders.fulfilled, (state: AdminOrderState, action) => {
                state.orders = action.payload;
            });
} });
  // eslint-disable-next-line no-empty-pattern
  export const { } = adminSlice.actions;

  export default adminSlice.reducer;
