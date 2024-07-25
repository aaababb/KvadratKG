import { axiosWithFile } from "../../../app/api";

export const headingPostReq = (data) => {
  return axiosWithFile.post("/heading/", data);
};
