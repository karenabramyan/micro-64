import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './apireg';
import RegisterData from './types/RegisterData';
import AuthState from './types/AuthState';
import Credentials from './types/Credentials';

const initialState: AuthState = {
  authChecked: false,
  user: undefined,
  loginFormError: undefined,
  registerFormError: undefined,
};

export const register = createAsyncThunk(
    '/api/registration',
    async (data: RegisterData) => {
      if (!data.email.trim()
      || !data.password.trim()
      || !data.secPassword.trim()
      || !data.phone.trim()
      || !data.login.trim()) {
        throw new Error('Пожалуйста, заполните все поля');
      }
      if (data.password !== data.secPassword) {
        throw new Error('Пароли не совпадают');
      }
      if (data.phone.length !== 16) {
        throw new Error('Некорректный номер телефона');
      }
      const userData = await api.register(data);
      if (userData.error) {
        throw new Error(userData.error);
      }
      return userData.user;
    }
  );

  export const getUser = createAsyncThunk('/auth/user', () => api.user());

  export const login = createAsyncThunk(
    '/auth/login',
    async (credentials: Credentials) => {
      if (!credentials.email.trim() || !credentials.password.trim()) {
        throw new Error('Пожалуйста, заполните все поля!');
      }
      const userData = await api.login(credentials);

      if (userData.error) {
        throw new Error(userData.error);
      }
      return userData.user;
    }
  );

  export const logout = createAsyncThunk('/auth/logout', api.logout);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      resetLoginFormError: (state) => {
        state.loginFormError = undefined;
      },
      resetRegisterFormError: (state) => {
        state.registerFormError = undefined;
      },
    },
    extraReducers: (builder) => {
     builder
          .addCase(register.fulfilled, (state: AuthState, action) => {
            state.user = action.payload;
            state.registerFormError = undefined;
          })
          .addCase(register.rejected, (state, action) => {
            state.registerFormError = action.error.message;
          })
          .addCase(login.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loginFormError = undefined;
          })
          .addCase(login.rejected, (state, action) => {
            state.loginFormError = action.error.message;
          })
          .addCase(logout.fulfilled, (state) => {
            state.user = undefined;
          })
          .addCase(getUser.fulfilled, (state, action) => {
            state.authChecked = true;
           if (action.payload.isLoggedIn) {
           (state.user = action.payload.user);
           } else {
          (state.user = undefined);
}
          });
} });

export const {resetLoginFormError, resetRegisterFormError } = authSlice.actions;

export default authSlice.reducer;
