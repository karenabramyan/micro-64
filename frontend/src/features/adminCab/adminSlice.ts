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

  export const changeOrders = createAsyncThunk(
    'orders/changeOrders',
    async (orders: { status: string, orderId: number }) => {
      const data = await api.changeOrderStatus(orders);
      return data;
    }
  );

  const adminSlice = createSlice({
      name: 'orders',
      initialState,
      reducers: {},
      extraReducers: (builder) => {
          builder
            .addCase(loadOrders.fulfilled, (state: AdminOrderState, action) => {
                state.orders = action.payload;
            })
            .addCase(changeOrders.fulfilled, (state: AdminOrderState, action) => {
              state.orders = state.orders
              .map((el) => (el.id === action.payload.orderId)
                ? { ...el, orderStatus: action.payload.status } : el);
            });
} });
  // eslint-disable-next-line no-empty-pattern
  export const { } = adminSlice.actions;

  export default adminSlice.reducer;
