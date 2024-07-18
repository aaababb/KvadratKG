import { axiosWithFile } from "../../../app/api";

const api = {
  postHeading: (data) => axiosWithFile.post("/headings/", data),
};

export default api;
