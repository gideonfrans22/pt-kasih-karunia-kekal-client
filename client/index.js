const Axios = require("axios");

export const baseURL = "https://admin.kasihkaruniakekalpt.com";

export const clientAxios = Axios.create({
  baseURL,
});
