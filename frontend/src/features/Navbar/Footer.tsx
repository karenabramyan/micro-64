import React from 'react';
// import { makeStyles } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Footer():JSX.Element {
// const useStyles = makeStyles((theme: any) => ({
//   rootBox: {
//     [theme.breakpoints.down('md')]: {
//       justifyContent: 'center'
//     }
//   },
//   footerNav: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     marginRight: 'auto',
//     marginLeft: theme.spacing(3),
//     marginBottom: theme.spacing(0),

//     [theme.breakpoints.down('md')]: {
//       width: '100%',
//       marginLeft: 'auto',
//       marginTop: theme.spacing(3),
//       marginBottom: theme.spacing(2),
//     }
//   },
//   footerLink: {
//     marginLeft: theme.spacing(3),
//     marginRight: theme.spacing(3),
//     [theme.breakpoints.down('md')]: {
//       marginBottom: theme.spacing(2),
//     }
//   },
// }));
//   // const classes = useStyles();

//   const content = {
//     brand: { image: 'nereus-assets/img/nereus-light.png', width: 110 },
//     copy: '© 2020 Nereus All rights reserved.',
//     link1: 'First Link',
//     link2: 'Second Link',
//     link3: 'Third Link',
//     link4: 'Fourth Link',
//     // ...props.content
//   };

//   let brand;

//   if (content.brand.image) {
//     brand = <img src={content.brand.image} alt="" width={content.brand.width} />;
//   } else {
//     // brand = content.brand.text || '';
//   }

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
