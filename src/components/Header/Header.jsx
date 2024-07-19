import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/CobagageLogo.png';
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
import Stack from '@mui/material/Stack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AdbIcon from '@mui/icons-material/Adb';
import MenuItem from '@mui/material/MenuItem';
import Language from '../LanguagePicker/Language';
import Badge from '@mui/material/Badge';
const pages = ['HomePage', 'Menu', 'Profil'];
const sessions = ['Login', 'Inscription'];
const Header = ({ notification }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
      <header className="header">
        <AppBar sx={{ background: 'white' }} position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <a href='HomePage'><img src={logo} alt="Logo" style={{ height: 60,
                width: 150 }} /></a>
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
                  {pages.map((page) => (
                      <MenuItem
                          key={page}
                          onClick={handleCloseNavMenu}
                          component={Link}
                          to={`/${page.toLowerCase()}`}
                      >
                        <Typography sx={{ color: 'black' }} textAlign="center">
                          {page === 'Profil' && notification ? (
                              <Badge
                                  badgeContent=" "
                                  variant="dot"
                                  color="error"
                                  sx={{ '& .MuiBadge-dot': { backgroundColor: 'red' } }}
                              >
                                {page}
                              </Badge>
                          ) : (
                              page
                          )}
                        </Typography>
                      </MenuItem>
                  ))}
                </Menu>
              </Box>
              <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              <Typography
                  variant="h5"
                  noWrap
                  component={Link}
                  to="/" // Lien vers la page d'accueil
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
                Cobagage
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <Button
                        key={page}
                        component={Link}
                        to={`/${page.toLowerCase()}`}
                        sx={{ my: 2, color: 'black', display: 'block', fontFamily: 'Arial, sansserif' }}
                    >
                      {page === 'Profil' && notification ? (
                          <Badge
                              badgeContent=" "
                              variant="dot"
                              color="error"
                              sx={{ '& .MuiBadge-dot': { backgroundColor: 'red' } }}
                          >
                            {page}
                          </Badge>
                      ) : (
                          page
                      )}
                    </Button>
                ))}
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Stack direction="row" spacing={3}>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar sx={{ color: 'orange' }}>
                      <AccountCircleIcon />
                    </Avatar>
                  </IconButton>
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
                    {sessions.map((session) => (
                        <MenuItem key={session} onClick={handleCloseUserMenu}
                                  component={Link}
                                  to={`/${session.toLowerCase()}`}>
                          <Typography textAlign="center">{session}</Typography>
                        </MenuItem>
                    ))}
                  </Menu>
                  <Language />
                </Stack>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </header>
  );
};
export default Header;