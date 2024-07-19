import { apiRoot } from "../../../app/api";

export const getHeadingsReq = () => {
  return apiRoot.get("/headings/");
}
