import { Element } from "react-scroll";
import Products from "../../features/Products/ui/Products";
import Argument from "../../features/Argument/Argument";
import Uslugi from "../../features/Uslugi/Uslugi";
import Accordion from "../../features/Accordion/ui/Accordion";
import Swipers from "../../features/Swipers/ui/Swipers";
import { useSelector } from "react-redux";
import { Homepages } from "./Homepages";
import BannerSkeleton from "../../shared/helpers/BannerSkeleton";
const HomePage = () => {
  const {isLoading} = useSelector((state) => state.heading)
  return (
    <div>
      {status == isLoading ? <BannerSkeleton/> : <Homepages />}
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