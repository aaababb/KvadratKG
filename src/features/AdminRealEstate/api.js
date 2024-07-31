import { apiRoot, axiosWithFile } from "../../app/api";
import { getUserLS } from "../Sign-In/store/utils";

export const getHousesReq = () => {
  return apiRoot.get("/houses/");
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
