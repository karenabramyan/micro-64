import { Button, TextField, Typography, Container, FormGroup } from '@mui/material';
import React, { useState } from 'react';
import RegisterData from './types/RegisterData';
import * as api from './apireg';
import { RootState, useAppDispatch } from '../../store';
import { register } from './authSlice';
import { Form } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { RootState } from '../../store';
// import * as api from './api';

function Registration(): JSX.Element {
//   const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const selector = useSelector((globalState: RootState) => globalState.auth);
//   const errorReg = selector.registerFormError;
  console.log(selector);
  const [login, setLogin] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [secPassword, setSecPassword] = useState<string>('');

  function handleSubmit(): void {
      event!.preventDefault();
      const newUser: RegisterData = {
        login, email, phone, password, secPassword
      };
      dispatch(register(newUser));
    }

  function handleLoginChange(inputLogin: string): void {
        setLogin(inputLogin);
    }

  function handleEmailChange(inputEmail: string): void {
        setEmail(inputEmail);
    }

    function handlePhoneChange(inputPhone: string): void {
        setPhone(inputPhone);
    }

  function handlePassChange(pass: string): void {
        setPassword(pass);
    }

  function handleSecPassChange(pass: string): void {
        setSecPassword(pass);
    }

  return (
    <Container>
    <form className="form-group" onSubmit={handleSubmit}>
      <FormGroup>
      <Typography variant="h5">Регистрация</Typography>
      <TextField variant="outlined" margin="dense" label="Имя" type="text" value={login} onChange={(event) => handleLoginChange(event.target.value)} />
      <TextField variant="outlined" margin="dense" label="Электронная почта" type="email" value={email} onChange={(event) => handleEmailChange(event.target.value)} />
      <TextField variant="outlined" margin="dense" label="Номер телефона" type="phone" value={phone} onChange={(event) => handlePhoneChange(event.target.value)} />
      <TextField variant="outlined" margin="dense" label="Введите пароль" type="password" value={password} onChange={(event) => handlePassChange(event.target.value)} />
      <TextField variant="outlined" margin="dense" label="Повторите пароль" type="password" value={secPassword} onChange={(event) => handleSecPassChange(event.target.value)} />
      <Button type="submit">Зарегистрироваться</Button>
      </FormGroup>
    </form>
    <div className="err-form-error" />
    </Container>
  );
}

export default Registration;
