const axios = require("axios");
//const {TOKEN} = require("../config/values");

const headers = {
  'Content-Type': 'application/json',
//   Authorization: localStorage.getItem(TOKEN),
};
const API_URL = import.meta.env.API_URL;
const server = axios.create({
  baseURL: API_URL,
  headers: headers,
});

export {server, API_URL};

