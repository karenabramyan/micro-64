import Item from './types/Item';

export async function loadItems(): Promise<Item[]> {
    const response = await fetch('/api/items');
    return response.json();
  }
