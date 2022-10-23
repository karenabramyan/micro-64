import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import Item from '../cards/types/Item';
import * as api from './apiBasket';
import BasketData from './types/BasketData';
import BasketState from './types/BasketState';

const initialState = {
    basket: []
};

// eslint-disable-next-line import/prefer-default-export
export const loadBasket = createAsyncThunk(
    'basket/loadBasket',
    () => api.loadBasket()
  );

  export const sendToBasket = createAsyncThunk(
    'basket/sendToBasket',
    async (basData: BasketData): Promise<{ item?: Item, error?: string } > => {
      const newBasketItem = await api.sendToBasket(basData);
      if (newBasketItem.item) {
        return { item: newBasketItem.item };
      }
      return newBasketItem;
    }
  );

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadBasket.fulfilled, (state: BasketState, action) => {
              console.log(action.payload)
              state.basket = action.payload;
            })
          .addCase(sendToBasket.fulfilled, (state: BasketState, action) => {
            if (action.payload.item) {
            state.basket.push(action.payload.item);
            }
          });
} });

export const { } = basketSlice.actions;

export default basketSlice.reducer;