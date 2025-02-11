import axios from "axios";

const instance = axios.create({
  baseURL: "https://newsapi.org/",
  timeout: 5000,
  headers: {
    accept: "application/json",
  },
});

export default instance;
