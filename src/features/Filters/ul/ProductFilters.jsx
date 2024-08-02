import React from "react";
import ProductBlock from "../../Products/ui/ProductBLock";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getHouses } from "../../AdminRealEstate/store/action";
import NoData from "../../../shared/assets/img/NoData.png";

const ProductFilters = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.houses);
  const { price, typeHouse, comfort } = useSelector((state) => state.filter);

  React.useEffect(() => {
    dispatch(
      getHouses({
        price,
        typeHouse,
        comfort,
      })
    );
  }, [price, typeHouse, comfort]);

  const product = () => {
    return (
      <Box className="grid grid-cols-4 gap-2 gap-y-4">
        {items.map((item, index) => (
          <ProductBlock key={index} {...item} />
        ))}
      </Box>
    );
  };

  const notFound = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "400px",
      }}
    >
      <img src={NoData} alt="no data" className="w-[200px] h-[230px]" />
      <p className="text-2xl text-white">
        К сожалению нам не удалось ничего найти по вашему запросу
      </p>
      <p className="text-white">Попробуйте изменить параметры поиска</p>
    </Box>
  );

  return items.length !== 0 ? product() : notFound;
};

export default ProductFilters;
