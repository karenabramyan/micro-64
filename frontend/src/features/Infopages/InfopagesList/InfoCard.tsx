import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function InfoCard(): JSX.Element {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
        КАК ОБЫЧНЫЕ НАУШНИКИ СТАЛИ ЧАСТЬЮ АТРИБУТИКИ СТУДЕНТОВ
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        История создания этого аксессуара началась еще в конце 19 века. В 1890 году компания Electrophone создала наушники для прослушивания «живой» музыку с театров Лондона. Сервис существовал с 1895 до 1926 года.

К 1908 насчитывалось 600 подписчиков, а вещание велось из 30 театров и церквей. Сейчас такие цифры могут показаться смешными, но на тот момент не многие могли пользоваться такой техникой из-за ее дороговизны. В целом это был большой успех для компании и хорошее начало для сферы наушников
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {/* "a benevolent smile" */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
