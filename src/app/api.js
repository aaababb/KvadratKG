import axios from "axios";

const BASE_URL = "http://192.168.68.135:8080/";

const formDataHeaders = {
  "Content-Type": "multipart/form-data",
};
const jsonHeaders = {
  "Content-Type": "application/json",
};

export const apiRoot = axios.create({
  baseURL: BASE_URL,
  headers: jsonHeaders,
});

export const axiosWithFile = axios.create({
  baseURL: BASE_URL,
  headers: formDataHeaders,
});
