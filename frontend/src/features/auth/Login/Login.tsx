import React from 'react';
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Container, FormGroup, TextField, Typography } from '@mui/material';
// import { login, resetLoginFormError } from './authSlice';
// import { selectLoginFormError } from './selectors';
import { RootState, useAppDispatch } from '../../../store';
import { login } from '../authSlice';
import { useSelector } from 'react-redux';

function Login(): JSX.Element {
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  // const error = useSelector(selectLoginFormError);
  // const selector = useSelector((globalState: RootState) => globalState.auth);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

function handleSubmit(event: React.FormEvent): void {
      event.preventDefault();
      dispatch(
        login({
          email,
          password,
        })
      );
}

  function handleEmailChange(inputEmail: string): void {
    setEmail(inputEmail);
}

function handlePasswordChange(inputPassword: string): void {
  setPassword(inputPassword);
}

  return (
    <Container>
      <form onSubmit={handleSubmit}>
      <FormGroup className="form-group">
        <Typography variant="h5">Вход</Typography>
        <TextField variant="outlined" margin="dense" label="Электронная почта" type="email" value={email} onChange={(event) => handleEmailChange(event.target.value)} />
        <TextField variant="outlined" margin="dense" label="Введите пароль" type="password" value={password} onChange={(event) => handlePasswordChange(event.target.value)} />

        <br />
        <Button type="submit">Вход</Button>
      </FormGroup>
      </form>
      <div className="err-form-error" />
    </Container>
  );
}

export default Login;
