import React, { createContext, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { scroller } from 'react-scroll';

export const ScrollContext = createContext();

const Layout = () => {
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <ScrollContext.Provider value={scrollToSection}>
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </ScrollContext.Provider>
  );
};

export default Layout;
