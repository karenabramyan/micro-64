import React from 'react';
import { CardMedia, Card, CardContent, Typography, CardActions, Button, IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import Item from './types/Item';
import ModalWindow from './ModaWindow';

function ItemCard({ item }: { item: Item }): JSX.Element {
  const [open, setOpen] = React.useState(false);
    const handleOpen = (): void => setOpen(true);
    const handleClose = (): void => setOpen(false);

  function cutTitle(text: string): string {
    if (text.length > 48) {
      return `${text.slice(0, 48)}...`;
    }
      return text;
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
          {`${item.price} `}
          <CurrencyRubleIcon />
        </Typography>

      </CardContent>
      <CardActions className="button-container">
        <Button size="medium" color="inherit" endIcon={<AddShoppingCartIcon />} variant="outlined" onClick={handleOpen}>Заказать</Button>
        <ModalWindow open={open} handleClose={handleClose} />
      </CardActions>
    </Card>
  );
}

export default ItemCard;
