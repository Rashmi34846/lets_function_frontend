import axios from "axios";

const api = axios.create({
  baseURL: "https://api.yourbackend.com", // CHANGE TO JAVA BACKEND URL
});

export const getProducts = () => api.get("/products");
export const getProductById = (id) => api.get(`/products/${id}`);
export const createOrder = (payload) => api.post("/orders", payload);

export default api;