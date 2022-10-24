import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import telega from './Img/icons8-app.svg';
import insta from './Img/icons8-instagram.svg';
import vk from './Img/icons8-vk-в-круге.svg';
import brand from './Img/999.svg';

export default function Footer():JSX.Element {
  return (
    <footer>
      <Container style={{ backgroundColor: 'grey' }} className="footer">
        <Box py={1} display="flex" flexWrap="wrap" alignItems="center" className="footBox">
          <Box component="nav" className="foot">
          <Link href="#" color="inherit" underline="none">
            <img style={{ borderRadius: '50%' }} src={brand}/>
          </Link>
          <h4>Микронаушник №1 В Саратове.</h4>
          <h6>Продажа|Аренда</h6>
          <Link href="https://t.me/89173102111"><img src={telega} alt="" /></Link>
          <Link href="https://vk.com/away.php?to=https%3A%2F%2Finstagram.com%2F_micro_64%3Figshid%3DYmMyMTA2M2Y%3D&cc_key="><img src={insta} alt="" /></Link>
          <Link href="https://vk.com/micronaushnik_v_saratove"><img src={vk} alt="" /></Link>
          </Box>
          <Box component="nav" display="flex" flexDirection="column" className="foot">
            <Link href="/" variant="body1" color="textPrimary">Главная</Link> {' '}
            <Link href="/info" variant="body1" color="textPrimary">Статьи</Link> {' '}
            <Link href="rent" variant="body1" color="textPrimary">Аренда</Link> {' '}
            <Link href="buy" variant="body1" color="textPrimary">Покупка</Link> {' '}
            <Link href="buy" variant="body1" color="textPrimary">Контакты</Link> {' '}
          </Box>
          {/* <Typography color="textSecondary" component="p" variant="caption" gutterBottom={false} /> */}
        </Box>
      </Container>
    </footer>
  );
}
