import React from 'react';
import './App.css';
import { Button } from '@mui/material';

import Navigation from '../Navbar/Navigation';
import Item from '../features/cards/Item';
import ItemList from '../features/cards/ItemList/ItemList';


function App(): JSX.Element {
  return (
    <>
      <Navigation />
      <h1>MICRO-64</h1>
      <Button variant="text">Text</Button>
      <ItemList />
    </>
  );
}

export default App;
