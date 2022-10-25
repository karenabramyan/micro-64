/* eslint-disable import/no-cycle */
import React from 'react';
import { CardMedia, Card, CardContent, Typography, CardActions, Button, IconButton, Popover } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import { useSelector } from 'react-redux';
import Item from '../cards/types/Item';
import ModalWindow from '../cards/ModaWindow';
import { useAppDispatch } from '../../store';
import { selectUser } from '../auth/selectors';
import { sendToBasket, resetSendError } from '../basket/basketSlice';
import User from '../auth/types/User';
import { selectSendError } from '../cards/selectItems';
import { removeItem} from './adminItemSlice';

// написать функцию на удаление карточки
// добавить кнопку на изменение и написать на нее функци
// создать файл слайс для удалений и изменений без обновлений

function AdminItem({ item }: { item: Item }): JSX.Element {
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
        <Typography gutterBottom variant="h3" component="h3">
          {cutPrice(item.price)}
          <CurrencyRubleIcon />
        </Typography>

      </CardContent>
      <CardActions className="button-container">
        <Button size="medium" color="inherit" endIcon={<AddShoppingCartIcon />} variant="outlined" onClick={() => removeItems(item.id)}>удалить</Button>
      </CardActions>
    </Card>
  );
}

export default AdminItem;
