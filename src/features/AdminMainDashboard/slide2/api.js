import { apiRoot } from "../../../app/api";

export const getMetricsReq = () => {
  return apiRoot.get("/metrics/");
}
