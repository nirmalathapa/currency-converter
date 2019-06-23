import axios from "axios";

const BASE_URL = "http://data.fixer.io/api/";
const API_KEY = process.env.REACT_APP_API_KEY;

export async function getSymbols() {
  const response = await axios.get(`${BASE_URL}symbols`, {
    params: { access_key: API_KEY }
  });

  return response.data.symbols;
}

export async function getRate(from, to, amount) {
  const response = await axios.get(`${BASE_URL}convert`, {
    params: { access_key: API_KEY, from: from, to: to, amount: amount }
  });
  return response.data.info.rate;
}
