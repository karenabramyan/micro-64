/* eslint-disable import/prefer-default-export */
import BasketData from './types/BasketData';

export async function sendToBasket(basData: BasketData): Promise<void> {
    const response = await fetch('/api/basket', {
      method: 'POST',
      body: JSON.stringify(basData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
}
