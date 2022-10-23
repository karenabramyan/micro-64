import { RootState } from '../../store';
import Item from './types/Item';

export const selectItems = (
  state: RootState
): Item[] => state.items.items;

export const selectUserId = (
  state: RootState
): number | undefined => state.auth.user?.id;

export const selectItemId = (
  state: RootState
): number | undefined => state.auth.user?.id;

