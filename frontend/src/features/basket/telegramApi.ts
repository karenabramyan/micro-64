export default async function sendApplication(user: any, items: any): Promise<void> {
  const response = await fetch('/api/telegram', {
    method: 'POST',
    body: JSON.stringify({ user, items }),
    headers: {
      'Content-type': 'application/json',
    },
  });
  const result = await response.json();
  console.log(result, 'RESPONSE FETCH');
}
