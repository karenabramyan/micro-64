import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Page } from './types/Page';
import './Nav.css';
import { RootState, useAppDispatch } from '../../store';
import { logout } from '../auth/authSlice';
import { Setting } from './types/Setting';

const pages: Page[] = [
  { name: 'Информация', way: '/' },
  { name: 'Аренда', way: '/rent' },
  { name: 'Покупка', way: '/buy' },
  { name: 'Корзина', way: '/basket' },
  { name: 'Избранное', way: '/like' },
];
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
    <AppBar position="static">
      <Container maxWidth="xl" className="Navi">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
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
            LOGO
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
                <MenuItem onClick={() => navigatePage('/')}>
                  <Typography textAlign="center">ИНФОРМАЦИЯ</Typography>
                </MenuItem>
                <MenuItem onClick={() => navigatePage('/rent')}>
                  <Typography textAlign="center">АРЕНДА</Typography>
                </MenuItem>
                <MenuItem onClick={() => navigatePage('/buy')}>
                <Typography textAlign="center">ПОКУПКА</Typography>
                </MenuItem>
                </div>
              ) : (
                <div>
                <MenuItem onClick={() => navigatePage('/')}>
                  <Typography textAlign="center">ИНФОРМАЦИЯ</Typography>
                </MenuItem>
                <MenuItem onClick={() => navigatePage('/rent')}>
                  <Typography textAlign="center">АРЕНДА</Typography>
                </MenuItem>
                <MenuItem onClick={() => navigatePage('/buy')}>
                <Typography textAlign="center">ПОКУПКА</Typography>
                </MenuItem>
                <MenuItem onClick={() => navigatePage('/basket')}>
                    <Typography textAlign="center">КОРЗИНА</Typography>
                </MenuItem><MenuItem onClick={() => navigatePage('/like')}>
                      <Typography textAlign="center">ИЗБРАННОЕ</Typography>
                           </MenuItem>
                </div>
              )}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
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
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {!user ? (
              <div>
              <Button
                onClick={() => navigatePage('/')}
                sx={{ color: 'white' }}
              >
                информация
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
              </div>
              ) : (
                <div>
                <Button
                  onClick={() => navigatePage('/')}
                  sx={{ color: 'white' }}
                >
                информация
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
                onClick={() => navigatePage('/basket')}
                // sx={{ my: 2, color: 'white', display: 'block' }}
              >
                корзина
              </Button>
              <Button
                onClick={() => navigatePage('/like')}
                // sx={{ my: 2, color: 'white', display: 'block' }}
              >
              избранное
              </Button>
                </div>
            )}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
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
                    <Typography textAlign="center">ЛОГИН</Typography>
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
