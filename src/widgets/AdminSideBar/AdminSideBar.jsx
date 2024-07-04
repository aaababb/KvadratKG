import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 240;

const AdminSidebar = ({ open, handleDrawerToggle }) => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'persistent'}
      open={open}
      onClose={handleDrawerToggle}
      sx={{
        '& .MuiDrawer-paper': {

          width: isMobile ? '200px' : drawerWidth,
          height: isMobile ? '450px' : 'calc(100vh - 64px)',
          position: isMobile ? 'absolute' : 'absolute',
          boxSizing: 'border-box',
          backgroundColor: '#222224',
          color: 'white',
          marginTop: isMobile ? '115px' : '60px',
          transition: 'margin 0.3s, height 0.3s, width 0.3s',
        },
      }}
    >
      <List>
        <ListItem button component={NavLink} to="/admin/main-dashboard" activeClassName="Mui-selected" exact>
          <ListItemIcon sx={{ color: 'white' }}><HomeIcon /></ListItemIcon>
          <ListItemText primary="Главная" />
        </ListItem>
        <ListItem button component={NavLink} to="/admin/real-estate" activeClassName="Mui-selected">
          <ListItemIcon sx={{ color: 'white' }}><BusinessIcon /></ListItemIcon>
          <ListItemText primary="Объекты Недвижимости" />
        </ListItem>
        <ListItem button component={NavLink} to="/admin/settings" activeClassName="Mui-selected">
          <ListItemIcon sx={{ color: 'white' }}><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Настройки" />
        </ListItem>
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <List sx={{ position: 'absolute', bottom: isMobile ? 8 : '50px' }}>
        <ListItem button component={NavLink} to="/logout">
          <ListItemIcon sx={{ color: 'white' }}><ExitToAppIcon /></ListItemIcon>
          <ListItemText primary="Выход" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default AdminSidebar;
