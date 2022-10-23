import { RootState } from '../../store';
import Item from './types/Item';

// eslint-disable-next-line import/prefer-default-export
export const selectItems = (
  state: RootState
): Item[] => state.items.items;

export const selectUserId = (
  state: RootState
): number | undefined => state.auth.user?.id;