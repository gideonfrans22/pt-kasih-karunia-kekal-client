const Axios = require("axios");

export const baseURL = "https://admin.kasihkaruniakekalpt.com/api";
export const mediaURL = "https://admin.kasihkaruniakekalpt.com"

export const clientAxios = async (url) => {
  const request = Axios.create({
    baseURL,
  });

  try {
    const response = await request.get(url);
    return response.data; // Return only the data
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error for further handling if needed
  }
};
