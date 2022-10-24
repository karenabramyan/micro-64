import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Footer():JSX.Element {
  return (
    <footer>
      <Container maxWidth="xl" style={{ backgroundColor: 'grey' }} className="footer">
        <Box py={1} display="flex" flexWrap="wrap" alignItems="center" className="footBox">
          <Link href="#" color="inherit" underline="none">
            {/* {brand} */}
          </Link>
          <Box component="nav" className="foot">
            <Link href="#" variant="body1" color="textPrimary">Karen</Link> {' '}
            <Link href="#" variant="body1" color="textPrimary">Karen</Link> {' '}
            <Link href="#" variant="body1" color="textPrimary">Karen</Link> {' '}
            <Link href="#" variant="body1" color="textPrimary">Karen</Link> {' '}
          </Box>
          <Typography color="textSecondary" component="p" variant="caption" gutterBottom={false} />
        </Box>
      </Container>
    </footer>
  );
}
