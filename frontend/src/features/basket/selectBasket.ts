/* eslint-disable import/prefer-default-export */
import { RootState } from '../../store';
import Item from '../cards/types/Item';
import ItemInBasket from './types/ItemInBasket';

export const selectBasket = (
  state: RootState
): Item[] => state.basket.basket;

export const selectTotalItems = (
  state: RootState
): ItemInBasket[] => state.basket.totalItems;

export const selectAddError = (
  state: RootState
): string | undefined => state.basket.addError;

export const selectDeleteError = (
  state: RootState
): string | undefined => state.basket.deleteError;
