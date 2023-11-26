import axios from "axios";

const url = import.meta.env.VITE_APP_API_URL;
const token = import.meta.env.VITE_APP_API_TOKEN;

export const makeRequest = axios.create({
    baseURL: url,
    headers: {
        Authorization: "bearer " + token,
    },
    onRequest(config) {
        console.log('Request:', config);
      }
})