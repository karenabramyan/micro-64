import { imageListClasses, Select, SelectChangeEvent, Typography } from '@mui/material';
import React from 'react';
import Item from '../../cards/types/Item';
import './BasketItem.css';

function BasketItem({ item }: { item: Item }): JSX.Element {
  const [days, setDays] = React.useState('1');

  function handleChangeDays(inputDays: string): void {
    setDays(inputDays);
  }

  return (
    <div className="basket-item">
      <img src={item.img} alt={item.title} className="basket-item-img" />
        <Typography className="basket-item-title">{item.title}</Typography>
        <Select
          className="basket-item-days"
          value={days}
          label="Дни"
          onChange={(event: SelectChangeEvent) => handleChangeDays(event?.target.value)}
        />
        <Typography className="basket-item-type">{item.type}</Typography>
        <Typography className="basket-item-price">{item.price}</Typography>
    </div>
  );
}

export default BasketItem;
