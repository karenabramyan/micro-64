import React from 'react';
import { CardMedia, Card, CardContent, Typography, CardActions, Button, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { blue } from '@mui/material/colors';
import Item from './types/Item';

function ItemCard({ item }: { item: Item }): JSX.Element {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        image={item.img}
        alt="micro"
        className="image-micro"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {item.title}
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
          {`${item.price} руб.`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.category}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Заказать</Button>
        <IconButton aria-label="add to favorites">
        <FavoriteIcon sx={{ color: blue[500] }} />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ItemCard;
