import axios from "axios";

export default axios.create({
  baseURL: "https://mlb-lineup-card-service.herokuapp.com/",
  withCredentials: true
});
