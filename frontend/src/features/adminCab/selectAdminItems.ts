import { RootState } from '../../store';
import Item from '../cards/types/Item';

// eslint-disable-next-line import/prefer-default-export
export const selectAdminItems = (
  state: RootState
): Item[] => state.items.items;
