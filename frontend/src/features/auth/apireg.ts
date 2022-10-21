import RegisterData from './types/RegisterData';
import User from './types/User';

/* eslint-disable import/prefer-default-export */
export async function register(resData: RegisterData): Promise<{ user?: User, message?: string }> {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(resData),
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
