/* eslint-disable import/no-cycle */
import React from 'react';
import { CardMedia, Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import Item from '../../cards/types/Item';
import { useAppDispatch } from '../../../store';
import { removeItem } from '../../cards/itemSlice';
import './AdminItem.css';
import ModalItemAdmin from './ModaItemAdmin';

// добавить кнопку на изменение и написать на нее функци
// создать файл слайс для удалений и изменений без обновлений

function AdminItem({ item }: { item: Item }): JSX.Element {
  const [open, setOpen] = React.useState(false);

  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  const dispatch = useAppDispatch();

  function cutTitle(text: string): string {
    if (text.length > 48) {
      return `${text.slice(0, 48)}...`;
    }
    return text;
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

  function removeItems(itemId: number): void {
    dispatch(removeItem(itemId));
  }
  return (
    <Card className="card-micro">
      <CardMedia
        component="img"
        image={item.img}
        alt="micro"
        className="image-micro"
      />
      <CardContent>
        {/* <Typography variant="body2" color="text.secondary">
          {item.category}
        </Typography> */}
        <Typography gutterBottom variant="h6" component="div" className="item-title" title={item.title}>
          {cutTitle(item.title)}
        </Typography>
        <Typography gutterBottom variant="h6" component="h3">
          {`Цена: ${cutPrice(item.price)} руб.`}
        </Typography>
        <Typography gutterBottom variant="h6" component="div" className="item-title" title={item.title}>
         На складе: {item.amount} шт.
        </Typography>
      </CardContent>
      <CardActions className="button-container-admin">
      <Button size="medium" color="inherit" variant="outlined" onClick={handleOpen}>изменить</Button>
        <Button size="medium" color="inherit" variant="outlined" onClick={() => removeItems(item.id)}>удалить</Button>
      </CardActions>
      <ModalItemAdmin
        open={open}
        handleClose={handleClose}
        amountStart={item.amount}
        priceStart={item.price}
        itemId={item.id}
      />
    </Card>
  );
}

export default AdminItem;
