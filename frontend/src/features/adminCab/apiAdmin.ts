import OrderAdminData from './types/OrderAdminData';

// eslint-disable-next-line import/prefer-default-export
export async function addItem(newItem: any): Promise<void> {
  const response = await fetch('/api/admin-item', {
    method: 'POST',
    body: newItem,
    // headers: {
    //   'Content-Type': 'multipart/form-data',
    // },
  });

  const data = await response.json();
  if (response.status >= 400) {
    const { error } = data;
    throw error;
  }

  return data;
}

export async function deleteAdminItem(itemId: number): Promise<{ itemId?: number }> {
  const response = await fetch('/api/admin-item', {
    method: 'DELETE',
    body: JSON.stringify({ itemId }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  return data;
}

export async function loadOrders(): Promise<OrderAdminData[]> {
  const response = await fetch('/api/admin/orders');
  return response.json();
}

export async function changeOrderStatus(statusData:
  { status: string, orderId: number }):
   Promise<{ status: string, orderId?: number, error?: string }> {
  const response = await fetch('/api/admin/orders', {
    method: 'PUT',
    body: JSON.stringify(statusData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  return data;
}

export async function changeItem(itemData:
  { itemId: number, price: string, amount: number }):
   Promise<{ itemId?: number, price: string, amount?: number, error?: string }> {
  const response = await fetch('/api/admin-item', {
    method: 'PUT',
    body: JSON.stringify(itemData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  return data;
}
