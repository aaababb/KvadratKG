import axios from "axios";

const BASE_URL = "http://192.168.68.133:8080";

export const apiRoot = axios.create({
  baseURL: BASE_URL,
});

const formDataHeaders = {
  "Content-Type": "multipart/form-data",
};

export const axiosWithFile = axios.create({
  baseURL: BASE_URL,
  headers: formDataHeaders,
});
