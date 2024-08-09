import React from "react";
import { Element } from "react-scroll";
import Products from "../../features/Products/ui/Products";
import Argument from "../../features/Argument/Argument";
import Uslugi from "../../features/Uslugi/Uslugi";
import Accordion from "../../features/Accordion/ui/Accordion";
import Swipers from "../../features/Swipers/ui/Swipers";

import { Link } from "react-router-dom";
import { Homepages } from "./Homepages";
const texts = ["Юридические чистые объекты", "Вся ответственность на нас по договору", "Поиск, подбор, продажа - все под ключ"];
const HomePage = () => {
  return (
    <div>
      <Homepages />
      <Element name="uslugi">
        <Uslugi />
      </Element>
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
