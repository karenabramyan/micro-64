import React from 'react';
import { CardMedia, Card, CardContent, Typography, CardActions, Button, IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import { useSelector } from 'react-redux';
import Item from './types/Item';
import ModalWindow from './ModaWindow';
import { useAppDispatch } from '../../store';
import { selectUser } from '../auth/selectors';
import { sendToBasket } from '../basket/basketSlice';
import User from '../auth/types/User';

function ItemCard({ item }: { item: Item }): JSX.Element {
    const [open, setOpen] = React.useState(false);
    const handleOpen = (): void => setOpen(true);
    const handleClose = (): void => setOpen(false);

    const selectUs = useSelector(selectUser);

    const dispatch = useAppDispatch();

  function cutTitle(text: string): string {
    if (text.length > 48) {
      return `${text.slice(0, 48)}...`;
    }
      return text;
  }

  function addToBasket(user: User | undefined, itemId: number): any {
    console.log('first');
    console.log(user, itemId);

    dispatch(sendToBasket({ user, itemId }));
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
        <Typography gutterBottom variant="h4" component="div">
          {cutPrice(item.price)}
          <CurrencyRubleIcon />
        </Typography>

      </CardContent>
      <CardActions className="button-container">
        <Button size="medium" color="inherit" endIcon={<AddShoppingCartIcon />} variant="outlined" onClick={() => addToBasket(selectUs, item.id)}>Заказать</Button>
        <ModalWindow open={open} handleClose={handleClose} />
        <IconButton size="medium" color="inherit" onClick={handleOpen}><FavoriteBorderIcon /></IconButton>
      </CardActions>
    </Card>
  );
}

export default ItemCard;
