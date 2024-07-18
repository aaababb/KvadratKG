import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { useOutletContext } from "react-router-dom";
import Slide2 from "./slide2/Slide2";
import Slide1 from "./slide1/Slide1";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const AdminMainDashboard = () => {
  const { mobileOpen } = useOutletContext();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div
        className={` transition-all duration-300 ${
          mobileOpen ? "w-[90%]" : "w-[92%]"
        }`}
      >
        {/* <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Slide1 windowWidth={windowWidth} mobileOpen={mobileOpen} />
          </SwiperSlide>
          <SwiperSlide>
            <Slide2 windowWidth={windowWidth} mobileOpen={mobileOpen} />
          </SwiperSlide>
          <SwiperSlide>
            <p>nvjksd</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>vjsbd</p>
          </SwiperSlide>
        </Swiper> */}
        <Box sx={{ width: "100%", marginLeft: "7.5%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                sx={{ color: "white" }}
                label="Добавить заголовок"
                {...a11yProps(0)}
              />

              <Tab
                sx={{ color: "white" }}
                label="Статистика"
                {...a11yProps(1)}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Slide1 windowWidth={windowWidth} mobileOpen={mobileOpen} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Slide2 windowWidth={windowWidth} mobileOpen={mobileOpen} />
          </CustomTabPanel>
        </Box>
      </div>
    </div>
  );
};

export default AdminMainDashboard;
