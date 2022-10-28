/* eslint-disable import/prefer-default-export */
import Item from './types/Item';

// eslint-disable-next-line import/prefer-default-export
export async function loadItems(): Promise<Item[]> {
    const response = await fetch('/api/items');
    return response.json();
  }
