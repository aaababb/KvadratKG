import { apiRoot } from "../../../app/api";

const api = {
  postHeading: (data) => apiRoot.post('/headings/', data)
};

export default api;
;