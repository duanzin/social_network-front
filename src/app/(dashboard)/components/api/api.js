import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DB_PORT,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.replace("/login");
    }
    return Promise.reject(error);
  }
);

export default api;
