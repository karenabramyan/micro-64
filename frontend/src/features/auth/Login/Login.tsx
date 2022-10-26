import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Container,
  FormGroup,
  TextField,
  Typography,
} from '@mui/material';
// import { login, resetLoginFormError } from './authSlice';
// import { selectLoginFormError } from './selectors';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../store';
import { login } from '../authSlice';
import './Login.css';
import { selectAuth, selectLoginFormError } from '../selectors';

function Login(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const errorLog = useSelector(selectLoginFormError);
  const selector = useSelector(selectAuth);
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

  useEffect(() => {
    if (selector!.user) {
      navigate('/rent');
    }
    if (selector!.user?.role === 'Admin') {
      navigate('/commodity-matrix');
    }
  }, [selector, navigate]);

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
          <TextField
            variant="outlined"
            margin="dense"
            label="Электронная почта"
            type="email"
            value={email}
            onChange={(event) => handleEmailChange(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="dense"
            label="Введите пароль"
            type="password"
            value={password}
            onChange={(event) => handlePasswordChange(event.target.value)}
          />

          <br />
          <Button type="submit">Вход</Button>
        </FormGroup>
      </form>
      {errorLog && (
        <Typography className="err-form-error" variant="overline">
          {errorLog}
        </Typography>
      )}
    </Container>
  );
}

export default Login;
