import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const AdminNavbar = ({ handleDrawerToggle, isOpen }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar
      position="fixed"
      sx={{
        width: isMobile ? '100%' : (isOpen ? `calc(100% - ${240}px)` : '100%'),
        transition: 'width 0.3s, margin 0.3s',
        backgroundColor: '#9A0A00',
        top: '60px'
      }}
    >
      <Toolbar>
        {!isMobile && (
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" sx={{ flexGrow: 1, display: isMobile ? 'none' : 'block' }}>
          KVADRAT.KG
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={handleDrawerToggle}>
          <Avatar alt="Admin" src="/path-to-admin-photo.jpg" sx={{ mr: 2 }} />
          <Box sx={{ paddingRight: 2, color: 'white' }}>
            <div>Admin Name</div>
            <div style={{ fontSize: 'small' }}>Админ</div>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AdminNavbar;
