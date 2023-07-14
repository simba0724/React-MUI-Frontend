import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';

const pages = ['Smart Contract', 'White Paper'];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{backgroundColor: 'transparent', boxShadow: 'none'}}>
      <Box>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box
            component="img"
            src="/logo.png"
            sx={{ mr: 2, width: {md: '77px', xs: '55px'}, py: '22px' }}
          />

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 'auto', mx: 2, color: '#F8F5EF', display: 'block', borderBottom: '2px solid #F8F5EF', borderRadius: 0, '& p': {fontFamily: 'somatic-rounded'} }}
              >
              	<Typography textAlign="center">{page}</Typography>
              </Button>
            ))}
          </Box>

          <Box sx={{display:{xs:'flex',md:'none'}}}>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{'& svg': {fontSize: '40px'}}}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none', },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Box
                  component="img"
                  src="/assets/Social/Twitter_Icon.png"
                  sx={{ mr: {xs: 3, md: 5}, height: { xs: 'auto', md: '38px' }, width: {xs: '50px', md: 'auto'} }}
                />
                <Typography textAlign="center" color="white">Twitter</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Box
                  component="img"
                  src="/assets/Social/IG_Icon.png"
                  sx={{ mr: {xs: 3, md: 5}, height: { xs: 'auto', md: '38px' }, width: {xs: '50px', md: 'auto'} }}
                />
                <Typography textAlign="center" color="white">Telegram</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Box
                  component="img"
                  src="/assets/Social/Dsc_Icon.png"
                  sx={{ mr: {xs: 3, md: 5}, height: { xs: 'auto', md: '38px' }, width: {xs: '50px', md: 'auto'} }}
                />
                <Typography textAlign="center" color="white">Discord</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Box
                  component="img"
                  src="/assets/Social/MetaMask_Icon.png"
                  sx={{ mr: {xs: 3, md: 5}, height: { xs: 'auto', md: '38px' }, width: {xs: '150px', md: 'auto'} }}
                />
              </MenuItem>
            </Menu>
          </Box>
          <Stack direction="horizontal" sx={{ display: { xs: 'none', md: 'flex' } }}>
          	<Box
	            component="img"
	            src="/assets/Social/Twitter_Icon.png"
	            sx={{ mr: 5, height: '38px' }}
	          />
	          <Box
	            component="img"
	            src="/assets/Social/IG_Icon.png"
	            sx={{ mr: 5, height: '38px' }}
	          />
	          <Box
	            component="img"
	            src="/assets/Social/Dsc_Icon.png"
	            sx={{ mr: 5, height: '38px' }}
	          />
	          <Box
	            component="img"
	            src="/assets/Social/MetaMask_Icon.png"
	            sx={{ mr: 5, height: '38px' }}
	          />
          </Stack>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Header;