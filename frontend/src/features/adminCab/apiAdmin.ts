import CredentialsItem from './types/CredentialsItem';
import OrderAdminData from './types/OrderAdminData';

// eslint-disable-next-line import/prefer-default-export
export async function addItem(newItem: CredentialsItem): Promise<void> {
  const response = await fetch('/api/admin-item', {
    method: 'POST',
    body: JSON.stringify(newItem),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  if (response.status >= 400) {
    const { error } = data;
    throw error;
  }

    return data;
}

export async function loadOrders(): Promise<OrderAdminData[]> {
  const response = await fetch('/api/admin/orders');
  return response.json();
}
