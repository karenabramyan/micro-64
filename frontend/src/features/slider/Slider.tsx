import React from 'react';
import './Slider.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Box, Typography } from '@mui/material';

function Example(): JSX.Element {
  const images = [
    './imagesForslider/1.jpeg',
    './imagesForslider/2.jpeg',
    './imagesForslider/3.jpeg',
    './imagesForslider/4.jpeg',
    './imagesForslider/5.jpeg',
    './imagesForslider/6.jpeg',
    './imagesForslider/7.jpeg',
    './imagesForslider/8.jpeg',
    './imagesForslider/9.jpeg',
    './imagesForslider/10.jpeg',
    './imagesForslider/11.jpeg',
    './imagesForslider/12.jpeg',
    './imagesForslider/13.jpeg',
    './imagesForslider/14.jpeg',
    './imagesForslider/15.jpeg',
    './imagesForslider/16.jpeg',
    './imagesForslider/17.jpeg',
    './imagesForslider/18.jpeg',
    './imagesForslider/19.jpeg',
    './imagesForslider/20.jpeg',
    './imagesForslider/21.jpeg',
    './imagesForslider/22.jpeg',
    './imagesForslider/23.jpeg',
    './imagesForslider/24.jpeg',
    './imagesForslider/25.jpeg',
    './imagesForslider/26.jpeg',
    './imagesForslider/27.jpeg',
    './imagesForslider/28.jpeg',
    './imagesForslider/29.jpeg',
    './imagesForslider/30.jpeg',
    './imagesForslider/32.jpeg',
    './imagesForslider/33.jpeg',
    './imagesForslider/34.jpeg',
    './imagesForslider/35.jpeg',
    './imagesForslider/36.jpeg',
    './imagesForslider/37.jpeg',
    './imagesForslider/38.jpeg',
    './imagesForslider/39.jpeg',
    './imagesForslider/40.jpeg',
  ];

  return (
    <>
    <Box className="bunner">
      <Typography variant="h2" gutterBottom>
        Бренд №1 по аренде и продаже микронаушников в Саратове
      </Typography>
    </Box>
    <Slide>
      {images.map((img) => (
        <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${img})` }} />
        </div>
))}
    </Slide>
    </>
  );
}

export default Example;
