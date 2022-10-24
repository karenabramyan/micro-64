import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Item from '../cards/types/Item';
import * as api from './apiBasket';
import BasketData from './types/BasketData';
import BasketState from './types/BasketState';
import OrderData from './types/OrderData';

const initialState: BasketState = {
  basket: [],
  totalItems: [],
};

// eslint-disable-next-line import/prefer-default-export
export const loadBasket = createAsyncThunk(
  'basket/loadBasket',
  () => api.loadBasket()
);

export const sendToBasket = createAsyncThunk(
  'basket/sendToBasket',
  async (basData: BasketData): Promise<{ item?: Item, error?: string, days?: string | number }> => {
    const newBasketItem = await api.sendToBasket(basData);
    if (newBasketItem.item) {
      return { item: newBasketItem.item, days: basData.days };
    }
    throw new Error(newBasketItem.status);
  }
);

export const addFromBasketToBasket = createAsyncThunk(
  'basket/addFromBasketToBasket',
  async (basData: BasketData): Promise<{ item?: Item, error?: string, days?: string | number }> => {
    const newBasketItem = await api.sendToBasket(basData);
    if (newBasketItem.item) {
      return { item: newBasketItem.item, days: basData.days };
    }
    throw new Error(newBasketItem.status);
  }
);

  export const removeFromBasket = createAsyncThunk(
    'basket/removeFromBasket',
    async (basData: BasketData) => {
     const data = await api.removeFromBasket(basData);
      if (data.itemId) return data.itemId;
      throw new Error(data.status);
    }
  );

  export const makeOrderBasket = createAsyncThunk(
    'basket/makeOrder',
    (data: OrderData[]) => api.makeOrder(data)
  );

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(loadBasket.fulfilled, (state: BasketState, action) => {
              state.basket = action.payload;
              state.totalItems = [];
              state.basket.forEach((basItem) => {
                const curItem = state.totalItems.findIndex((el) => el.title === basItem.title);
                if (curItem !== -1) {
                  state.totalItems[curItem].count += 1;
                } else {
                  state.totalItems.push({ ...basItem, count: 1 });
                }
              });
            },
            )
          .addCase(sendToBasket.rejected, (state, action) => {
              state.sendError = action.error.message;
            })
          .addCase(sendToBasket.fulfilled, (state: BasketState, action) => {
            state.sendError = undefined;
            if (action.payload.item) {
            state.basket.push({
              id: action.payload.item.id,
              title: action.payload.item.title,
              category: action.payload.item.category,
              img: action.payload.item.img,
              type: action.payload.item.type,
              price: action.payload.item.price,
              capacity: action.payload.item.capacity,
              range: action.payload.item.range,
              amount: action.payload.item.amount,
              days: action.payload.days

          });
}
})
          .addCase(addFromBasketToBasket.fulfilled, (state: BasketState, action) => {
            state.addError = undefined;
            if (action.payload.item) {
              state.basket.push({
                id: action.payload.item.id,
                title: action.payload.item.title,
                category: action.payload.item.category,
                img: action.payload.item.img,
                type: action.payload.item.type,
                price: action.payload.item.price,
                capacity: action.payload.item.capacity,
                range: action.payload.item.range,
                amount: action.payload.item.amount,
                days: action.payload.days

            });
            const curItem = state.totalItems.findIndex((el) =>
            el.title === action.payload.item!.title);
            if (curItem !== -1) {
              state.totalItems[curItem].count += 1;
            } else {
              state.totalItems.push({ ...action.payload.item, count: 1 });
            }
            }
          })
          .addCase(addFromBasketToBasket.rejected, (state, action) => {
            state.addError = action.error.message;
          })
          .addCase(removeFromBasket.fulfilled, (state: BasketState, action) => {
            state.deleteError = undefined;
            const itemForRemove = state.basket.findIndex(
              (s) => s.id === action.payload
            );
            state.basket = state.basket.filter((el, i) => i !== itemForRemove);
            const curItem = state.totalItems.findIndex((el) =>
            el.id === action.payload);
            if (curItem !== -1) {
              state.totalItems[curItem].count -= 1;
              if (state.totalItems[curItem].count === 0) {
                state.totalItems = state.totalItems.filter((el, i) => i !== curItem);
              }
            } else {
              state.totalItems = state.totalItems.filter((el, i) => i !== curItem);
            }
            }
          )
          .addCase(removeFromBasket.rejected, (state, action) => {
            state.deleteError = action.error.message;
          })
          .addCase(makeOrderBasket.fulfilled, (state) => {
            state.basket = [];
          });
} });

// eslint-disable-next-line no-empty-pattern
export const { } = basketSlice.actions;

export default basketSlice.reducer;
