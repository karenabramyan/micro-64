import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authSlice from './features/auth/authSlice';
import cardSlice from './features/cards/itemSlice';
import basketSlice from './features/basket/basketSlice';

const store = configureStore({
    reducer: {
        items: cardSlice,
        auth: authSlice,
        basket: basketSlice,
    }
});
export type RootState = ReturnType<typeof store.getState>;

// для правильной типизации будем использовать useAppDispatch вместо useDispatch
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch =
  useDispatch;

export default store;
