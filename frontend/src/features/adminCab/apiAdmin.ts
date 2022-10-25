import CredentialsItem from './types/CredentialsItem';
import OrderAdminData from './types/OrderAdminData';

// eslint-disable-next-line import/prefer-default-export
export async function addItem(newItem: any): Promise<void> {
  console.log(newItem)
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

export async function loadOrders(): Promise<OrderAdminData[]> {
  const response = await fetch('/api/admin/orders');
  return response.json();
}
