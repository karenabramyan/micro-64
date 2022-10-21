import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as api from './apireg';
import User from './types/User';
import RegisterData from './types/RegisterData';
import AuthState from './types/AuthState';

const initialState: AuthState = {
  authChecked: false,
  user: undefined,
  loginFormError: undefined,
  registerFormError: undefined,
};

export const register = createAsyncThunk(
    'auth/register',
    async (data: RegisterData) => {
      if (data.password !== data.secPassword) {
        throw new Error('Пароли не совпадают');
      }
      if (!data.login.trim() || !data.password.trim()) {
        throw new Error('Не все поля заполнены');
      }
      return api.register(data);
    }
  );

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
     builder.addCase(register.fulfilled, (state: AuthState, action) => {
            // state.user = action.payload;
            state.registerFormError = undefined;
          })
}});

export const { } = authSlice.actions;

export default authSlice.reducer;
