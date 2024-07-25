import { apiRoot } from "../../app/api";

export const getHousesReq = () => {
  return apiRoot.get("http://192.168.68.135:8080/houses/");
};
