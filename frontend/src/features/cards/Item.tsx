import React from 'react';
import {
  CardMedia,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  IconButton,
} from '@mui/material';

import { CardMedia, Card, CardContent, Typography, CardActions, Button, IconButton, Popover } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import { useSelector } from 'react-redux';
import { create } from 'domain';
import { idText } from 'typescript';
import Item from './types/Item';
import ModalWindow from './ModaWindow';
import { useAppDispatch } from '../../store';
import { selectUser } from '../auth/selectors';
import { sendToBasket, resetSendError } from '../basket/basketSlice';
import User from '../auth/types/User';

import { createLikes, removeLike } from '../favorites/likes/likeSlice';
import { selectLikes } from '../favorites/selectLikes';
import { selectSendError } from './selectItems';

function ItemCard({ item }: { item: Item }): JSX.Element {
    const [open, setOpen] = React.useState(false);
    // const [error, setError] = React.useState<string | undefined>(undefined);
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const openPopover = Boolean(anchorEl);

    const id = openPopover ? 'simple-popover' : undefined;

    const handleClickPopover = (event: React.MouseEvent<HTMLButtonElement>): void => {
      setAnchorEl(event.currentTarget);
    };

    const handleClosePopover = (): void => {
      dispatch(resetSendError());
      setAnchorEl(null);
    };

    const handleOpen = (): void => setOpen(true);
    const handleClose = (): void => setOpen(false);
    const likeSelect = useSelector(selectLikes);
    const selectUs = useSelector(selectUser);
    const selectSendErr = useSelector(selectSendError);
  // из likeSlice
  function addLike(): void {
    if (selectUs) {
      dispatch(createLikes({ userId: selectUs.id, itemId: item.id }));
    }
  }

  function cutTitle(text: string): string {
    if (text.length > 48) {
      return `${text.slice(0, 48)}...`;
    }
    return text;
  }

  // const addToBasket = React.useCallback(
  //   async (event: React.MouseEvent) => {
  //     event.preventDefault();

  //     const dispatchResult = await dispatch(sendToBasket({ user, itemId }));
  //     if (sendToBasket.rejected.match(dispatchResult)) {
  //       handleClickPopover(event)
  //     }
  //   },
  //   [dispatch, navigate]
  // );

function addToBasket(user: User | undefined, itemId: number,
    event: React.MouseEvent<HTMLButtonElement>): void {
      dispatch(sendToBasket({ user, itemId, days: 0 }));
      handleClickPopover(event);
      // if ('error' in result) {
      //   setError(result.error.message);
      //   console.log(error)
      //   handleClickPopover(event);
      // }
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
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          className="item-title"
          title={item.title}
        >
          {cutTitle(item.title)}
        </Typography>
        <Typography gutterBottom variant="h3" component="h3">
          {cutPrice(item.price)}
          <CurrencyRubleIcon />
        </Typography>
      </CardContent>
      <CardActions className="button-container">

        <Button size="medium" color="inherit" endIcon={<AddShoppingCartIcon />} variant="outlined" onClick={(event) => addToBasket(selectUs, item.id, event)}>Заказать</Button>
        {selectSendErr && (
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
          <Typography sx={{ p: 2 }}>{selectSendErr}</Typography>
</Popover>
)}

        <ModalWindow open={open} handleClose={handleClose} />
        <IconButton size="medium" color="inherit" onClick={addLike}>
          <FavoriteBorderIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ItemCard;
