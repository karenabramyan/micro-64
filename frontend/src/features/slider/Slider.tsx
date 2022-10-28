import React, { useEffect } from 'react';
import './Slider.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Box, createTheme, responsiveFontSizes, Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import type SwiperClass from 'swiper';

// eslint-disable-next-line prefer-destructuring
const Swiper: typeof SwiperClass = (window as any).Swiper;

let theme = createTheme();
theme = responsiveFontSizes(theme);

function Example(): JSX.Element {
  const images = [
    './imagesForslider/1.JPEG',
    './imagesForslider/2.JPEG',
    './imagesForslider/3.JPEG',
    './imagesForslider/4.JPEG',
    './imagesForslider/5.JPEG',
    './imagesForslider/6.JPEG',
    './imagesForslider/7.JPEG',
    './imagesForslider/8.JPEG',
    './imagesForslider/9.JPEG',
    './imagesForslider/10.JPEG',
    './imagesForslider/11.JPEG',
    './imagesForslider/12.JPEG',
    './imagesForslider/13.JPEG',
    './imagesForslider/14.JPEG',
    './imagesForslider/15.JPEG',
    './imagesForslider/16.JPEG',
    './imagesForslider/17.JPEG',
    './imagesForslider/18.JPEG',
    './imagesForslider/19.JPEG',
    './imagesForslider/20.JPEG',
    './imagesForslider/21.JPEG',
    './imagesForslider/22.JPEG',
    './imagesForslider/23.JPEG',
    './imagesForslider/24.JPEG',
    './imagesForslider/25.JPEG',
    './imagesForslider/26.JPEG',
    './imagesForslider/27.JPEG',
    './imagesForslider/28.JPEG',
    './imagesForslider/29.JPEG',
    './imagesForslider/30.JPEG',
    './imagesForslider/32.JPEG',
    './imagesForslider/33.JPEG',
    './imagesForslider/34.JPEG',
    './imagesForslider/35.JPEG',
    './imagesForslider/36.JPEG',
    './imagesForslider/37.JPEG',
    './imagesForslider/38.JPEG',
    './imagesForslider/39.JPEG',
    './imagesForslider/40.JPEG',
  ];

  useEffect(() => {
    // eslint-disable-next-line no-new
    const swiper = new Swiper('.mySwiper', {
      autoplay: { delay: 3000 },
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 20,
      loop: true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
    });

    return () => swiper.destroy();
  }, []);

  return (
    <>
      <Box className="bunner">
        <ThemeProvider theme={theme}>
          <Typography variant="h2" gutterBottom component="h2">
            Бренд №1 по аренде и продаже микронаушников в Саратове
          </Typography>
        </ThemeProvider>
      </Box>
      <div className="swiper-carousel">
        {/* {images.map((img) => (
        <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${img})` }} />
        </div> */}
        {/* ))} */}

        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            {images.map((img) => (
              <div className="swiper-slide">
                <img src={img} alt="slider" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}

export default Example;
