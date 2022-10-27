import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { useSelector } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import logo from './Img/logo.png';
// import { Page } from './types/Page';
import './Nav.css';
import { RootState, useAppDispatch } from '../../store';
import { logout } from '../auth/authSlice';
import { ImageListItem } from '@mui/material';
// import { Setting } from './types/Setting';
// const pages: Page[] = [
//   { name: 'Статьи', way: '/' },
//   { name: 'Аренда', way: '/rent' },
//   { name: 'Покупка', way: '/buy' },
//   { name: 'Корзина', way: '/basket' },
//   { name: 'Избранное', way: '/like' },
// ];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
function Navigation(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const settings: Setting[] = [
  //   { name: 'Logout', function: handleLogout, way: '#' },
  //   { name: 'Войти', way: '/login' },
  //   { name: 'Зарегистрироваться', way: '/register' },
  // ];
  function navigatePage(way: string): void {
    navigate(way);
    handleCloseNavMenu();
  }
  // async function handleLogout() {
  //   await dispatch(logout);
  //   handleCloseUserMenu();
  //   navigate('/');
  // }
  const handleLogout = React.useCallback(
    async (event: React.MouseEvent) => {
      event.preventDefault();
      const dispatchResult = await dispatch(logout());
      if (logout.fulfilled.match(dispatchResult)) {
        navigate('/');
      }
    },
    [dispatch, navigate]
  );
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = (): void => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = (): void => {
    setAnchorElUser(null);
  };
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <AppBar position="sticky">
      <Container className="Navi">
        <Toolbar disableGutters>
        {/* <img src={logo} alt="logo" className="logo" /> */}
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <ImageListItem sx={{ display: { xs: 'none', md: 'flex', width: '40px' } }}>
            <img src={logo} alt="logo" />
        </ImageListItem>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            &nbsp;MICRO64
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {!user ? (
                <div>
                <MenuItem onClick={() => navigatePage('/info')}>
                  <Typography textAlign="center">СТАТЬИ</Typography>
                </MenuItem>
                <MenuItem onClick={() => navigatePage('/rent')}>
                  <Typography textAlign="center">АРЕНДА</Typography>
                </MenuItem>
                <MenuItem onClick={() => navigatePage('/buy')}>
                <Typography textAlign="center">ПОКУПКА</Typography>
                </MenuItem>
                <MenuItem onClick={() => navigatePage('/contacts')}>
                <Typography textAlign="center">КОНТАКТЫ</Typography>
                </MenuItem>
                </div>
              ) : (user && user.role !== 'Admin') ? (
                <div>
                  <MenuItem onClick={() => navigatePage('/info')}>
                  <Typography textAlign="center">СТАТЬИ</Typography>
                  </MenuItem>
                <MenuItem onClick={() => navigatePage('/rent')}>
                  <Typography textAlign="center">АРЕНДА</Typography>
                </MenuItem>
                <MenuItem onClick={() => navigatePage('/buy')}>
                <Typography textAlign="center">ПОКУПКА</Typography>
                </MenuItem>
                <MenuItem onClick={() => navigatePage('/contacts')}>
                <Typography textAlign="center">КОНТАКТЫ</Typography>
                </MenuItem>
                <MenuItem onClick={() => navigatePage('/basket')}>
                    <Typography textAlign="center">КОРЗИНА</Typography>
                </MenuItem><MenuItem onClick={() => navigatePage('/like')}>
                      <Typography textAlign="center">ИЗБРАННОЕ</Typography>
                           </MenuItem>
                </div>
              ) : (
                <div>
                  <MenuItem onClick={() => navigatePage('/admincab')}>
                  <Typography textAlign="center">ДОБАВИТЬ НОВЫЙ ТОВАР</Typography>
                  </MenuItem>
                <MenuItem onClick={() => navigatePage('/commodity-matrix')}>
                  <Typography textAlign="center">ТОВАРНАЯ МАТРИЦА</Typography>
                </MenuItem>
                <MenuItem onClick={() => navigatePage('/adminorders')}>
                <Typography textAlign="center">ЗАКАЗЫ КЛИЕНТОВ</Typography>
                </MenuItem>
                </div>
              )}
            </Menu>
          </Box>
          <ImageListItem sx={{ display: { xs: 'flex', md: 'none', width: '40px' } }} className="logo">
            <img src={logo} alt="logo" className="logo" />
          </ImageListItem>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            &nbsp;MICRO64
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {!user ? (
<div>
                <Button
                  onClick={() => navigatePage('/info')}
                  sx={{ color: 'white' }}
                >
                  Статьи
                </Button>
                  <Button
                    onClick={() => navigatePage('/rent')}
                    sx={{ color: 'white' }}
                  >
                 аренда
                  </Button>
                <Button
                  onClick={() => navigatePage('/buy')}
                  sx={{ color: 'white' }}
                >
                  покупка
                </Button>
                <Button
                  onClick={() => navigatePage('/contacts')}
                  sx={{ color: 'white' }}
                >
                  контакты
                </Button>
</div>
              ) : (user && user.role !== 'Admin') ? (
              <div>
             <Button
               onClick={() => navigatePage('/info')}
               sx={{ color: 'white' }}
             >
             Статьи
             </Button>
             <Button
               onClick={() => navigatePage('/rent')}
               sx={{ color: 'white' }}
             >
            аренда
             </Button>
           <Button
             onClick={() => navigatePage('/buy')}
             sx={{ color: 'white' }}
           >
             покупка
           </Button>
           <Button
             onClick={() => navigatePage('/contacts')}
             sx={{ color: 'white' }}
           >
                  контакты
           </Button>
           <Button
             onClick={() => navigatePage('/basket')}
             sx={{ color: 'white' }}
           >
             корзина
           </Button>
           <Button
             onClick={() => navigatePage('/like')}
             sx={{ color: 'white' }}
           >
           избранное
           </Button>
              </div>
              ) : (
             <div>
             <Button
               onClick={() => navigatePage('/admincab')}
               sx={{ color: 'white' }}
             >
             добавить новый товар
             </Button>
             <Button
               onClick={() => navigatePage('/commodity-matrix')}
               sx={{ color: 'white' }}
             >
            товарная матрица
             </Button>
           <Button
             onClick={() => navigatePage('/adminorders')}
             sx={{ color: 'white' }}
           >
             заказы клиентов
           </Button>
             </div>
              )}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <Button onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <img alt="Remy Sharp" src="./img/logo.png" /> */}
                <p style={{ color: 'white' }}>Личный кабинет</p>
              </Button>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {!user ? (
                <>
                  <MenuItem onClick={() => navigatePage('/register')}>
                    <Typography textAlign="center">РЕГИСТРАЦИЯ</Typography>
                  </MenuItem>
                  <MenuItem onClick={() => navigatePage('/login')}>
                    <Typography textAlign="center">ВОЙТИ</Typography>
                  </MenuItem>
                </>
              ) : (
                <MenuItem onClick={handleLogout}>
                  <Typography textAlign="center">ВЫЙТИ</Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navigation;
