import React from 'react';
import './App.css';
import { Button } from '@mui/material';
import Navigation from '../Navbar/Navigation';

function App(): JSX.Element {
  return (
    <>
      <Navigation />
      <h1>MICRO-64</h1>
      <Button variant="text">Text</Button>

    </>
  );
}

export default App;
