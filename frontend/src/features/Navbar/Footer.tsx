import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import telega from './Img/icons8-app.svg';
import insta from './Img/icons8-instagram.svg';
import vk from './Img/icons8-vk-в-круге.svg';
// import brand from './Img/logo.png';
import './Nav.css';

export default function Footer(): JSX.Element {
  return (
    <footer>
      <Container className="footer">
        <Box py={0} display="flex" flexWrap="wrap" alignItems="center" className="footBox">
          <Box component="nav" className="foot">
            <div className="leftbox">
              <h4 className="footTitle">Микронаушники №1 В Саратове.</h4>
              <p className="copy">© «Micro-64», 2022.</p>
            </div>
            <div>
              <Link href="https://t.me/89173102111"><img src={telega} alt="" /></Link>
              <Link href="https://vk.com/away.php?to=https%3A%2F%2Finstagram.com%2F_micro_64%3Figshid%3DYmMyMTA2M2Y%3D&cc_key="><img src={insta} alt="" /></Link>
              <Link href="https://vk.com/micronaushnik_v_saratove"><img src={vk} alt="" /></Link>
              <Link href="/fran" variant="body1" color="textPrimary">Франшиза</Link> {' '}
            </div>
          </Box>
        </Box>
      </Container>
    </footer>
  );
}
