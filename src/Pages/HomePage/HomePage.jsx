import React from "react";
import { Element } from "react-scroll";
import Products from "../../features/Products/ui/Products";
import Argument from "../../features/Argument/Argument";
import Carousel from "../../features/Banner.jsx/ui/Carousel/Carousel";
import Uslugi from "../../features/Uslugi/Uslugi";
import Accordion from "../../features/Accordion/ui/Accordion";
import Swipers from "../../features/Swipers/ui/Swipers";

const HomePage = () => {
  return (
    <div>
      {/* <Carousel />
      <Element name="uslugi">
        <Uslugi />
      </Element> */}
      <Element name="products">
        <Products />
      </Element>
      <Argument />
      <Element name="faq">
        <Accordion />
      </Element>
      <Swipers />
    </div>
  );
};
export default HomePage;