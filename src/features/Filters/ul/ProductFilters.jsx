import React from "react";
import ProductBlock from "../../Products/ui/ProductBLock";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getHouses } from "../../AdminRealEstate/store/action";

const ProductFilters = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.houses);

  React.useEffect(() => {
    dispatch(getHouses());
  }, []);

  return (
    <Box className="flex flex-wrap items-center justify-around gap-1 lg:justify-between ">
      {items.map((item, index) => (
        <ProductBlock key={index} {...item} />
      ))}
    </Box>
  );
};

export default ProductFilters;
