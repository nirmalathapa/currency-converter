import axios from "axios";

const BASE_URL = "http://data.fixer.io/api/";
const API_KEY = "ea822fdcd3ab8bf29d1685c349225ad9";

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
