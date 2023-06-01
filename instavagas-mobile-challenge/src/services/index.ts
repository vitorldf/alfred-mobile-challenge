import Axios from "axios";

export const api = Axios.create({
  baseURL: "https://randomuser.me/api",
});
