/* eslint-disable import/prefer-default-export */
import { RootState } from '../../store';
import ItemInBasket from './types/ItemInBasket';
import OrderData from './types/OrderData';

export const selectBasket = (
  state: RootState
): OrderData[] => state.basket.basket;

export const selectTotalItems = (
  state: RootState
): ItemInBasket[] => state.basket.totalItems;

export const selectAddError = (
  state: RootState
): string | undefined => state.basket.addError;

export const selectDeleteError = (
  state: RootState
): string | undefined => state.basket.deleteError;
