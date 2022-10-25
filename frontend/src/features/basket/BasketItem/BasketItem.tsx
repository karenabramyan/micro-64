import { Card, CardActions, FormControl, IconButton, InputLabel, MenuItem, Popover, Select, SelectChangeEvent, Typography } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSelector } from 'react-redux';
import './BasketItem.css';
import { addFromBasketToBasket, changeDays, removeFromBasket, resetAddError } from '../basketSlice';
import { useAppDispatch } from '../../../store';
import User from '../../auth/types/User';
import { selectUser } from '../../auth/selectors';
import ItemInBasket from '../types/ItemInBasket';
import { selectAddError } from '../selectBasket';

function BasketItem({ item }: { item: ItemInBasket }): JSX.Element {
  const dispatch = useAppDispatch();
  const [days, setDays] = useState('1');

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const openPopover = Boolean(anchorEl);

  const id = openPopover ? 'simple-popover' : undefined;

  const handleClickPopover = (event: React.MouseEvent<HTMLButtonElement>): void => {
      setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = (): void => {
      setAnchorEl(null);
      dispatch(resetAddError());
  };

function handleChangeDays(inputDays: string): void {
    setDays(inputDays);
    dispatch(changeDays({ id: item.id, days: inputDays }));
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
  const selectAdd = useSelector(selectAddError);

  function addToBasket(user: User | undefined, itemId: number,
    event: React.MouseEvent<HTMLButtonElement>): any {
    dispatch(addFromBasketToBasket({ user, itemId, days }));
    handleClickPopover(event);
  }

  function deleteFromBasket(user: User | undefined, itemId: number): any {
    dispatch(removeFromBasket({ user, itemId, days }));
  }

  return (
    <Card className="basket-item">
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
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
          <MenuItem value="6">6</MenuItem>
          <MenuItem value="7">7</MenuItem>
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
<IconButton onClick={(event) => addToBasket(selectUs, item.id, event)}><AddIcon /></IconButton>
{(selectAdd) && (
<Popover
  id={id}
  open={openPopover}
  anchorEl={anchorEl}
  onClose={handleClosePopover}
  anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
>
        <Typography sx={{ p: 2 }}>{selectAdd}</Typography>
        {/* <Typography sx={{ p: 2 }}>{selectDelete}</Typography> */}
</Popover>
)}
<Typography>{item.count}</Typography>
<IconButton onClick={() => deleteFromBasket(selectUs, item.id)}><RemoveIcon /></IconButton>
</CardActions>
        <Typography className="basket-item-type">{item.type}</Typography>
        <Typography className="basket-item-price">{cutPrice(item.price)}</Typography>
    </Card>
  );
}

export default BasketItem;
