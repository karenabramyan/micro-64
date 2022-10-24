import { CardActions, FormControl, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSelector } from 'react-redux';
import Item from '../../cards/types/Item';
import './BasketItem.css';
import { removeFromBasket, sendToBasket } from '../basketSlice';
import { useAppDispatch } from '../../../store';
import User from '../../auth/types/User';
import { selectUser } from '../../auth/selectors';

function BasketItem({ item }: { item: Item }): JSX.Element {
  const dispatch = useAppDispatch();
  const [days, setDays] = React.useState('1');

  function handleChangeDays(inputDays: string): void {
    setDays(inputDays);
  }

  function cutPrice(price: string): string | number {
    const text = price.toString();
    if (text.length > 3) {
      const secondPart = text.slice(-3);
      const firstPart = text.slice(0, text.length - 3);
      return `${firstPart} ${secondPart} `;
    }
    return `${text} `;
  }

  const selectUs = useSelector(selectUser);

  function addToBasket(user: User | undefined, itemId: number): any {
    dispatch(sendToBasket({ user, itemId }));
  }

  function deleteFromBasket(user: User | undefined, itemId: number): any {
    dispatch(removeFromBasket({ user, itemId }));
  }

  return (
    <div className="basket-item">
      <img src={item.img} alt={item.title} className="basket-item-img" />
        <Typography className="basket-item-title">{item.title}</Typography>
        {(item.type === 'Аренда') && (
<FormControl className="basket-item-days" sx={{ minWidth: 100 }}>
        <InputLabel>Дни</InputLabel>
        <Select
          value={days}
          label="Дни"
          onChange={(event: SelectChangeEvent) => handleChangeDays(event?.target.value)}
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="3">4</MenuItem>
          <MenuItem value="3">5</MenuItem>
          <MenuItem value="3">6</MenuItem>
          <MenuItem value="3">7</MenuItem>
        </Select>
</FormControl>
)}
{(item.type === 'Покупка') && (
<FormControl className="basket-item-days" sx={{ minWidth: 100 }}>
        <InputLabel>Дни</InputLabel>
        <Select
          value={days}
          label="Дни"
          onChange={(event: SelectChangeEvent) => handleChangeDays(event?.target.value)}
        >
          <MenuItem value="-">-</MenuItem>
        </Select>
</FormControl>
)}
<CardActions>
<IconButton onClick={() => addToBasket(selectUs, item.id)}><AddIcon /></IconButton>
<Typography> 1</Typography>
<IconButton onClick={() => deleteFromBasket(selectUs, item.id)}><RemoveIcon /></IconButton>
</CardActions>
        <Typography className="basket-item-type">{item.type}</Typography>
        <Typography className="basket-item-price">{cutPrice(item.price)}</Typography>
    </div>
  );
}

export default BasketItem;
