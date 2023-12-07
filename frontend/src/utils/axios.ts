import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.CONFIG_BASE_URL,
});
