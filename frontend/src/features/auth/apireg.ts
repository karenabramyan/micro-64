import Credentials from './types/Credentials';
import RegisterData from './types/RegisterData';
import User from './types/User';

/* eslint-disable import/prefer-default-export */
export async function register(resData: RegisterData): Promise<{ user?: User, error?: string }> {
      const response = await fetch('/api/registration', {
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

    export async function user(): Promise<
    | {
        isLoggedIn: true;
        user: User;
      }
    | {
        isLoggedIn: false;
      }
  > {
    return (await fetch('/api/auth/user')).json();
  }

  export async function login(credentials: Credentials): Promise<{ user?: User, error?: string }> {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    if (res.status >= 400) {
      const { error } = data;
      throw error;
    }

    return data;
  }

  export async function logout(): Promise<void> {
    await fetch('/api/auth/logout', {
      method: 'POST',
    });
  }
