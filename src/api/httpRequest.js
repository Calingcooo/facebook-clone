const axios = require("axios");

const httpRequest = async (url, method, data = null) => {
  try {
    const config = {
      url,
      method,
    };

    if (data) {
      config.data = data;
    }

    const response = await axios(config);

    return response.data;
  } catch (error) {
    console.error(error.response?.data || error.message);
    throw error;
  }
};

export default httpRequest;
