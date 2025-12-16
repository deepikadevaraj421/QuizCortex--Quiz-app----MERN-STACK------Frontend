import axios from "axios";

const api = axios.create({
   baseURL: "https://quizcortex-quiz-app-mern-stack-backend-1.onrender.com/api",
});

// TOKEN attach panna (VERY IMPORTANT)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
