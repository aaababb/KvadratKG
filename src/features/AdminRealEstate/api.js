import { apiRoot, axiosWithFile } from "../../app/api";
import { getUserLS } from "../Sign-In/store/utils";

export const getHousesReq = () => {
  return apiRoot.get("/houses/");
};

export const getHousesReqFilter = (params) => {
  const { price, typeHouse, comfort } = params;
  function encodeIfInvalid(searchString) {
    const invalidCharacters = /[^a-zA-Z0-9-_.~]/;
    if (invalidCharacters.test(searchString)) {
      return encodeURIComponent(searchString);
    }
    return searchString;
  }
  return apiRoot.get(
    `/houses/?has_pool=${comfort.pool ? "true" : ""}&has_gym=${
      comfort.gym ? "true" : ""
    }&has_garage=${comfort.garage ? "true" : ""}&has_parking=${
      comfort.parking ? "true" : ""
    }&has_garden=${comfort.garden ? "true" : ""}&has_fireplace=${
      comfort.fireplace ? "true" : ""
    }&has_elevator=${comfort.elevator ? "true" : ""}&has_clubhouse=${
      comfort.clubhouse ? "true" : ""
    }&has_pool_no_gym=&category=${encodeIfInvalid(typeHouse)}&min_price=${
      price.min
    }&max_price=${price.max}&min_square_footage=&max_square_footage=`
  );
};

export const getHouseByIdReq = (id) => {
  return apiRoot.get(`/houses/${id}/`);
};

export const postHouseReq = (data) => {
  const { username, password } = getUserLS();
  const token = btoa(`${username}:${password}`);
  return axiosWithFile.post("/houses/", data, {
    headers: {
      Authorization: `Basic ${token}`,
    },
  });
};

export const patchHouseReq = (data, id) => {
  return axiosWithFile.put(`/houses/${id}`, data);
};

export const deleteHouseReq = (id) => {
  return apiRoot.delete(`/houses/${id}`);
};
