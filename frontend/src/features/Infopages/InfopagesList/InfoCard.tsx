import * as React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function InfoCard({ props }:any): JSX.Element {
  function cutBody(text: string): string {
    if (text.length > 48) {
      return `${text.slice(0, 48)}...`;
    }
      return text;
  }
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
        {props.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {cutBody(props.bodyTwo)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
