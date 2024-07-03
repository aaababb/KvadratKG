import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const AdminSidebar = ({ open, handleDrawerToggle }) => {
  return (
    <Drawer
      variant="persistent"
      open={open}
      onClose={handleDrawerToggle}
      sx={{
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          position: 'fixed',
          top: '64px', // Высота хедера
          height: 'calc(100vh - 64px)',
          boxSizing: 'border-box',
        },
      }}
    >
      <List>
        <ListItem button component={Link} to="/admin/main-dashboard">
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Главная" />
        </ListItem>
        <ListItem button component={Link} to="/admin/real-estate">
          <ListItemIcon><BusinessIcon /></ListItemIcon>
          <ListItemText primary="Объекты Недвижимости" />
        </ListItem>
        <ListItem button component={Link} to="/admin/settings">
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Настройки" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default AdminSidebar;
