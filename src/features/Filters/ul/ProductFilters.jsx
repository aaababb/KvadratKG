import React from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import ProductBlock from "../../Products/ui/ProductBLock";
import ProductBlockSkeleton from "../../../shared/helpers/ProductBlockSkeleton";
import { getHouses } from "../../AdminRealEstate/store/action";
import { Status } from "../../AdminRealEstate/store/slice";
import NoData from "../../../shared/assets/img/NoData.png";
import NotFounProduct from "../../../shared/helpers/NotFounProduct";

const ProductFilters = () => {
  const dispatch = useDispatch();
  const { items, status, count } = useSelector((state) => state.houses);
  const { price, typeHouse, comfort, page } = useSelector(
    (state) => state.filter
  );

  React.useEffect(() => {
    dispatch(
      getHouses({
        params: {
          price,
          typeHouse,
          comfort,
        },
        page,
      })
    );
  }, [price, typeHouse, comfort, page]);

  const productsList = items.map((item, index) => (
    <ProductBlock key={index} {...item} />
  ));
  const skeletonsList = [...new Array(8)].map((_, i) => (
    <ProductBlockSkeleton key={i} />
  ));

  return status === Status.ERROR ? (
    <NotFounProduct title="Ошибка с сервером" />
  ) : (
    <Box className="grid grid-cols-4 gap-2 gap-y-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 max-500:grid-cols-2">
      {status === Status.LOADING ? (
        skeletonsList
      ) : count > 0 ? (
        productsList
      ) : (
        <NotFounProduct title="Ничего не найдено" />
      )}
    </Box>
  );
};

export default ProductFilters;
