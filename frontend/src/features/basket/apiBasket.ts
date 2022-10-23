/* eslint-disable import/prefer-default-export */
import Item from '../cards/types/Item';
import BasketData from './types/BasketData';

export async function loadBasket(): Promise<Item[]> {
  const response = await fetch('/api/basket');
  return response.json();
}

export async function sendToBasket(basData: BasketData): Promise<{ item?: Item, error: string }> {
    const response = await fetch('/api/basket', {
      method: 'POST',
      body: JSON.stringify(basData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return data;
}
