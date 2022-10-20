import React, { useEffect } from 'react';
import { CardMedia, Card, CardContent, Typography, CardActions, Button, IconButton} from '@mui/material'
import micro from './micro.jpeg'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { blue } from '@mui/material/colors';
import Item from '../Item';
import { useAppDispatch } from '../../../store';
import { loadCards } from '../itemSlice';
import { useSelector } from 'react-redux';
import { selectItems } from '../selectItems';
import './ItemList.css';

function ItemList(): JSX.Element {
    const dispatch = useAppDispatch();

    const items = useSelector(selectItems);

    useEffect(() => {
        dispatch(loadCards());
      }, [dispatch]);

  return (
    <div className='container'>
    {items.map((item) => <Item item={item}/>)}
    </div>
  );
}

export default ItemList;