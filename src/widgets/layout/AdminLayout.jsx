import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AdminNavbar from '../AdminNavBar/AdminNavbar';
import AdminSidebar from '../AdminSideBar/AdminSideBar';

const drawerWidth = 240;

const AdminLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <Header />
      <AdminNavbar handleDrawerToggle={handleDrawerToggle} isOpen={mobileOpen} />
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <AdminSidebar open={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            marginLeft: mobileOpen ? `${drawerWidth}px` : '0',
            transition: 'margin 0.3s',
            border: '2px solid red',
            height: 'calc(100vh - 64px)', // Высота хедера
            overflowY: 'auto', // Для прокрутки контента
          }}
        >
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default AdminLayout;
