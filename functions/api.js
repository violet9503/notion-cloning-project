const axios = require("axios");
require("dotenv").config();

const { API_BASE_URI, API_KEY } = process.env;

exports.handler = async function (event) {
  const options = JSON.parse(event.body);
  const { id = "", method, body, url } = options;
  const { data } = await axios({
    url: `${API_BASE_URI}${url}`,
    method,
    headers: {
      "Content-Type": "application/json",
      "x-username": API_KEY,
    },
    data: body,
  });
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
