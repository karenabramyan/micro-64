import { Button, TextField, Typography, Container, FormGroup } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MuiTelInput } from 'mui-tel-input';
import RegisterData from './types/RegisterData';
import { RootState, useAppDispatch } from '../../store';
import { register, resetRegisterFormError } from './authSlice';

function Registration(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const selector = useSelector((globalState: RootState) => globalState.auth);
  const errorReg = selector.registerFormError;
  const [login, setLogin] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('+79');
  const [password, setPassword] = useState<string>('');
  const [secPassword, setSecPassword] = useState<string>('');

  function handleSubmit(): void {
    // eslint-disable-next-line no-restricted-globals
    event!.preventDefault();
    const newUser: RegisterData = {
      login, email, phone, password, secPassword
    };
    dispatch(register(newUser));
    dispatch(resetRegisterFormError());
  }

  useEffect(() => {
    if (selector.user) {
      navigate('/rent');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selector]);

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
    <Container className="container-register">
      <form className="form-group" onSubmit={handleSubmit}>
        <FormGroup>
          <Typography variant="h4">Регистрация</Typography>
          <br />
          <TextField variant="outlined" margin="dense" label="Имя" type="text" value={login} onChange={(event) => handleLoginChange(event.target.value)} />
          <TextField variant="outlined" margin="dense" label="Электронная почта" type="email" value={email} onChange={(event) => handleEmailChange(event.target.value)} />
          <MuiTelInput variant="outlined" margin="dense" label="Номер телефона" value={phone} onChange={(event) => handlePhoneChange(event)} />
          <TextField variant="outlined" margin="dense" label="Введите пароль" type="password" value={password} onChange={(event) => handlePassChange(event.target.value)} />
          <TextField variant="outlined" margin="dense" label="Повторите пароль" type="password" value={secPassword} onChange={(event) => handleSecPassChange(event.target.value)} />
          <br />
          <Button type="submit" size="large" color="error" variant="outlined">Зарегистрироваться</Button>
        </FormGroup>
      </form>
      {errorReg && (<Typography className="err-form-error" variant="overline">{errorReg}</Typography>)}
    </Container>
  );
}

export default Registration;
