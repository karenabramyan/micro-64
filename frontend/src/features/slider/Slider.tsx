import React from 'react';
import './Slider.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Box, Typography } from '@mui/material';

function Example(): JSX.Element {
  const images = [
    'https://thumb.cloud.mail.ru/weblink/thumb/xw1/ae5o/pXoM6ksEA/%D0%A1%20%D1%82%D0%B5%D0%BA%D1%81%D1%82%D0%BE%D0%BC/4.JPEG',
    'https://thumb.cloud.mail.ru/weblink/thumb/xw1/ae5o/pXoM6ksEA/%D0%A1%20%D1%82%D0%B5%D0%BA%D1%81%D1%82%D0%BE%D0%BC/24.JPEG',
    'https://thumb.cloud.mail.ru/weblink/thumb/xw1/ae5o/pXoM6ksEA/%D0%A1%20%D1%82%D0%B5%D0%BA%D1%81%D1%82%D0%BE%D0%BC/7.JPEG',
  ];

  return (
    <>
    <Box className="bunner">
      <Typography variant="h2" gutterBottom>
        Бренд №1 по аренде и продаже микронаушников в Саратове
      </Typography>
    </Box>
    <Slide>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[0]})` }} />
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[1]})` }} />
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[2]})` }} />
      </div>
    </Slide>
    </>
  );
}

export default Example;
