import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as api from './apireg';
import User from './types/User';
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
      if (data.password !== data.secPassword) {
        throw new Error('Пароли не совпадают');
      }
      if (!data.email.trim() || !data.password.trim()) {
        throw new Error('Не все поля заполнены');
      }
      return api.register(data);
    }
  );

  // export const getUser = createAsyncThunk('auth/user', () => api.user());

  export const login = createAsyncThunk(
    'auth/login',
    async (credentials: Credentials) => {
      if (!credentials.email.trim() || !credentials.password.trim()) {
        throw new Error('Не все поля заполнены');
      }
      return api.login(credentials);
    }
  );

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
     builder.addCase(register.fulfilled, (state: AuthState, action) => {
            state.user = action.payload.user;

            state.registerFormError = undefined;
          })
          .addCase(login.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loginFormError = undefined;
          });
} });

export const { } = authSlice.actions;

export default authSlice.reducer;
