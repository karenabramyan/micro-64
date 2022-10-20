import React from 'react';
import './App.css';
import { Button } from '@mui/material';
import Item from '../features/cards/Item';
import ItemList from '../features/cards/ItemList/ItemList';

function App(): JSX.Element {
  return (
    <>
      <h1>MICRO-64</h1>
      <Button variant="text">Text</Button>
      <ItemList />
    </>
  );
}

export default App;
