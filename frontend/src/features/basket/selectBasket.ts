/* eslint-disable import/prefer-default-export */
import { RootState } from '../../store';
import Item from '../cards/types/Item';

export const selectBasket = (
  state: RootState
): Item[] => state.basket.basket;
