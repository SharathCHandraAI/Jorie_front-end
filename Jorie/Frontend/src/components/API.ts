import axios from "axios";

const site = axios.create({
  // baseURL: "http://localhost:5000", // Adjust as needed
  baseURL: "https://jorie-front-end.onrender.com", // Adjust as needed

  headers: {
    "Content-Type": "application/json",
  },
});

export default site;