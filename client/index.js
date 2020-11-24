const Axios = require("axios");

export const baseURL = "http://api.goent26.com";

export const clientAxios = Axios.create({
  baseURL,
});
