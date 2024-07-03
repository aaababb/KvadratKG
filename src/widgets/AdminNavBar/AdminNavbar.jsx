import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const AdminNavbar = ({ handleDrawerToggle, isOpen }) => {
  return (
    <AppBar
      position="relative"
      color="default"
      sx={{
        width: isOpen ? `calc(100% - ${240}px)` : '100%',
        marginLeft: isOpen ? `${240}px` : '0',
        transition: 'width 0.3s, margin 0.3s',
        zIndex: 1201,
      }}
    >
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          KVADRAT.KG
        </Typography>
        <Box>
          {/* Дополнительные элементы Navbar (если нужно) */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AdminNavbar;
