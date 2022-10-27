import React, { useState } from 'react';
import { CardMedia, Card, CardContent, Typography, CardActions, Button, IconButton, Popover } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from 'react-redux';
import Item from './types/Item';
import ModalWindow from './ModalWindow/ModaWindow';
import { useAppDispatch } from '../../store';
import { selectUser } from '../auth/selectors';
import { sendToBasket, resetSendError } from '../basket/basketSlice';
import User from '../auth/types/User';

import { createLikes } from '../favorites/likes/likeSlice';
import { selectSendError } from './selectItems';

function ItemCard({ item, liked }: { item: Item, liked: boolean }): JSX.Element {
  const dispatch = useAppDispatch();
  const [open, setOpen] = React.useState(false);
  const [like, setLike] = useState(liked);
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

//   useEffect(() => {
//     const info = likes.filter((likeItem) => likeItem.id === item.id);
//     if (info.length > 0) {
//       setLike(true);
//     } else {
//       setLike(false);
//     }
// }, []);

  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);
  // const likeSelect = useSelector(selectLikes);
  const selectUs = useSelector(selectUser);
  const selectSendErr = useSelector(selectSendError);
  // из likeSlice
  function addLike(): void {
    if (selectUs) {
      dispatch(createLikes({ userId: selectUs.id, itemId: item.id }));
    }
    setLike(!like);
  }

  function cutTitle(text: string): string {
    if (text.length > 48) {
      return `${text.slice(0, 48)}...`;
    }
    return text;
  }

  function addToBasket(user: User | undefined, itemId: number,
    event: React.MouseEvent<HTMLButtonElement>): void {
    dispatch(sendToBasket({ user, itemId, days: 0 }));
    handleClickPopover(event);
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
      <IconButton size="medium" color="error" onClick={addLike} className="item-like-button">
      {like ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
      <CardMedia
        component="img"
        image={item.img}
        alt="micro"
        className="image-micro"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          className="item-title"
          title={item.title}
        >
          {cutTitle(item.title)}
        </Typography>
        <Typography gutterBottom variant="h4" component="h4" className="item-price">
          {cutPrice(item.price)}
          <CurrencyRubleIcon />
        </Typography>
      </CardContent>
      <CardActions className="button-container-item">

        <Button size="medium" color="inherit" variant="outlined" onClick={(event) => addToBasket(selectUs, item.id, event)} className="button-buy-item">Заказать</Button>
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

        <ModalWindow
          open={open}
          handleClose={handleClose}
          item={item}
          addToBasket={addToBasket}
          addLike={addLike}
        />
        <Button size="medium" color="inherit" variant="outlined" onClick={handleOpen}>Подробнее</Button>
      </CardActions>
    </Card>
  );
}

export default ItemCard;
