import { Button, TextField, Typography, Container, FormGroup } from '@mui/material';
import React, { useState } from 'react';

// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { RootState } from '../../store';
// import * as api from './api';

function Registration(): JSX.Element {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const selector = useSelector((globalState: RootState) => globalState.auth);
//   const errorReg = selector.registerFormError;

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [secPassword, setSecPassword] = useState<string>('');

//   function handleSubmit(): void {
//       event?.preventDefault()
//       api.register({name, email, password, secPassword})
//         .then((data) => {
//           if (data.user) {
//             console.log(data)
//           dispatch({type: 'auth/registration/success', payload: data.user});
//           navigate('/main')
//           } else {
//           dispatch({type: 'auth/registration/error', payload: data.message});
//           }
//         })
//     }

  function handleNameChange(inputName: string): void {
        setName(inputName);
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
    <FormGroup className="form-group">
      <Typography variant="h5">Регистрация</Typography>
      <TextField variant="outlined" margin="dense" label="Имя" type="text" value={name} onChange={(event) => handleNameChange(event.target.value)} />
      <TextField variant="outlined" margin="dense" label="Электронная почта" type="email" value={email} onChange={(event) => handleEmailChange(event.target.value)} />
      <TextField variant="outlined" margin="dense" label="Номер телефона" type="phone" value={phone} onChange={(event) => handlePhoneChange(event.target.value)} />
      <TextField variant="outlined" margin="dense" label="Введите пароль" type="password" value={password} onChange={(event) => handlePassChange(event.target.value)} />
      <TextField variant="outlined" margin="dense" label="Повторите пароль" type="password" value={secPassword} onChange={(event) => handleSecPassChange(event.target.value)} />
      <br />
      <Button type="submit">Зарегистрироваться</Button>
    </FormGroup>
    <div className="err-form-error" />
    </Container>
  );
}

export default Registration;
