/*
Axios Request Handler
Params: 
type    -> GET,POST,DELETE
url     -> Request Url
data    -> Request Body
headers -> Request Header
*/
import { axiosErrorHandler } from "./axiosErrorHandler";
import Axios from "axios";

export const axiosRequestHandler = (type, url, data = "", headers = "") => {
  switch (type) {
    case "GET":
      return Axios.get(url, headers).catch(axiosErrorHandler);
    case "POST":
      return Axios.post(url, data, headers).catch(axiosErrorHandler);
    case "DELETE":
      return Axios.delete(url, { headers, data }).catch(axiosErrorHandler);
    case "PUT":
      return Axios.put(url, data, headers).catch(axiosErrorHandler);
  }
};
