/* eslint-disable import/prefer-default-export */
import Item from '../cards/types/Item';
import BasketData from './types/BasketData';
import OrderData from './types/OrderData';

export async function loadBasket(): Promise<OrderData[]> {
  const response = await fetch('/api/basket');
  return response.json();
}

export async function sendToBasket(basData: BasketData):
 Promise<{ item?: Item, status: string, days: string }> {
    const response = await fetch('/api/basket', {
      method: 'POST',
      body: JSON.stringify(basData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return { ...data, days: basData.days };
}

export async function removeFromBasket(basData: BasketData):
Promise<{ itemId?: number, status: string }> {
  const response = await fetch('/api/basket', {
    method: 'DELETE',
    body: JSON.stringify(basData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  return data;
}

export async function makeOrder(orderData: OrderData[]):
Promise<any> {
  const response = await fetch('/api/order', {
    method: 'POST',
    body: JSON.stringify(orderData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
}
