import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authSlice from './features/auth/authSlice';
import cardSlice from './features/cards/itemSlice';
import basketSlice from './features/basket/basketSlice';
// eslint-disable-next-line import/no-cycle
import adminItemSlice from './features/adminCab/adminItemSlice';

const store = configureStore({
  reducer: {
    items: cardSlice,
    auth: authSlice,
    basket: basketSlice,
    adminItem: adminItemSlice
  }
});
export type RootState = ReturnType<typeof store.getState>;

// для правильной типизации будем использовать useAppDispatch вместо useDispatch
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch =
  useDispatch;

export default store;
