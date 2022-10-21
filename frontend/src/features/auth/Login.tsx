import React from 'react';
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Container, FormGroup, TextField, Typography } from '@mui/material';
// import { login, resetLoginFormError } from './authSlice';
// import { selectLoginFormError } from './selectors';
import { useAppDispatch } from '../../store';

function Login(): JSX.Element {
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  // const error = useSelector(selectLoginFormError);
  // const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // const handleSubmit = React.useCallback(
  //   async (event: React.FormEvent) => {
  //     event.preventDefault();
  //     const dispatchResult = await dispatch(
  //       login({
  //         email,
  //         password,
  //       })
  //     );

  //     if (login.fulfilled.match(dispatchResult)) {
  //       navigate('/');
  //     }
  //   },
  //   [dispatch, email, navigate, password]
  // );

  // const handleEmailChange = React.useCallback(
  //   (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setEmail(event.target.value);
  //     dispatch(resetLoginFormError());
  //   },
  //   [dispatch]
  // );

  // const handlePasswordChange = React.useCallback(
  //   (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setPassword(event.target.value);
  //     dispatch(resetLoginFormError());
  //   },
  //   [dispatch]
  // );

  return (
    <Container>
      {/* <FormGroup className="form-group">
        <Typography variant="h5">Вход</Typography>
        <TextField variant="outlined" margin="dense" label="Электронная почта" type="email" value={email} onChange={(event) => handleEmailChange(event.target.value)} />
        <TextField variant="outlined" margin="dense" label="Введите пароль" type="password" value={password} onChange={(event) => handlePasswordChange(event.target.value)} />

        <br />
        <Button type="submit">Вход</Button>
      </FormGroup>
      <div className="err-form-error" /> */}
    </Container>
  );
}

export default Login;
