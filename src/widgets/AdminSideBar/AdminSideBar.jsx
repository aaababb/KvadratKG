import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Box, useTheme, useMediaQuery } from '@mui/material';

const drawerWidth = 240;

const AdminSidebar = ({ open, handleDrawerToggle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();

  const isActiveRoute = (route) => location.pathname === route || location.pathname.startsWith(route);

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'persistent'}
      open={open}
      onClose={handleDrawerToggle}
      sx={{
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          position: 'fixed',
          boxSizing: 'border-box',
          backgroundColor: '#222224',
          color: 'white',
          top: '60px',
          height: `calc(100vh - 64px)`,
        },
      }}
    >
      <List>
        <NavLink to="/admin" style={({ isActive }) => ({
          textDecoration: 'none',
          color: isActive && location.pathname === '/admin' ? 'red' : 'white',
        })}>
          <ListItem>
            <ListItemIcon sx={{ color: 'white' }}><HomeIcon /></ListItemIcon>
            <ListItemText primary="Главная" />
          </ListItem>
        </NavLink>

        <NavLink to="/admin/real-estate" style={({ isActive }) => ({
          textDecoration: 'none',
          color: isActive ? 'red' : 'inherit',
        })}>
          <ListItem>
            <ListItemIcon sx={{ color: 'white' }}><BusinessIcon /></ListItemIcon>
            <ListItemText primary="Объекты Недвижимости" />
          </ListItem>
        </NavLink>

        <NavLink to="/admin/settings" style={({ isActive }) => ({
          textDecoration: 'none',
          color: isActive ? 'red' : 'inherit',
        })}>
          <ListItem>
            <ListItemIcon sx={{ color: 'white' }}><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Настройки" />
          </ListItem>
        </NavLink>
      </List>
      <Box sx={{ flexGrow: 1 }} />

      <NavLink to="/">
        <List sx={{ position: 'absolute', bottom: 8 }}>
          <ListItem>
            <ListItemIcon sx={{ color: 'white' }}><ExitToAppIcon /></ListItemIcon>
            <ListItemText primary="Выход" />
          </ListItem>
        </List>
      </NavLink>

    </Drawer>
  );
};

export default AdminSidebar;
