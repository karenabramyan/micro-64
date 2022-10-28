export default async function sendApplication(user: any, items: any): Promise<void> {
  const response = await fetch('/api/telegram', {
    method: 'POST',
    body: JSON.stringify({ user, items }),
    headers: {
      'Content-type': 'application/json',
    },
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const result = await response.json();
}
