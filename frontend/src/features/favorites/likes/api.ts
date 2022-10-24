import LikData from '../types/LikData';
import Like from '../types/Like';


// eslint-disable-next-line import/prefer-default-export
export async function loadLikes(): Promise<Like[]> {
  const response = await fetch('/api/likes');
  return response.json();
}

export async function createLike(likData: LikData) : Promise<{ like?: Like }> {
  const response = await fetch('/api/likes', {
    method: 'POST',
    body: JSON.stringify(likData),
    headers: {
      'Content-Type': 'application/json'
    },
  });
  const data = await response.json();
  return data;
}
