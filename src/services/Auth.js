/**
 * Auth Service - Global Service to expose the authentication methods
 *
 */
import Axios from "axios";
// import endpoint from "../config/endpoints";
import { axiosErrorHandler } from "../util/axiosErrorHandler";
import { axiosRequestHandler } from "../util/axiosRequestHandler";

// const API_ENDPOINT = endpoint.AUTH_URL;
const API_ENDPOINT = null;
// const API_USER = endpoint.USER_URL;
const API_USER = null;

export const loginUserService = request => {
  return true;
  // const itemToAdd = {
  //   username: request.payload.email,
  //   password: request.payload.password
  // };
  // return axiosRequestHandler(
  //   "POST",
  //   API_ENDPOINT + "auth/token",
  //   itemToAdd,
  //   ""
  // );
};

export const logoutUserService = request => {
  let finalAuth = "Bearer " + request;
  let config = {
    headers: {
      "Content-Type": "application/json-patch+json",
      Authorization: finalAuth
    }
  };
  return axiosRequestHandler("GET", API_ENDPOINT + "auth/logout", "", config);
};

export function forgotPasswordAPI(request = null) {
  let username = request.payload;
  return axiosRequestHandler(
    "POST",
    API_ENDPOINT + "user/forgotpassword",
    { username },
    ""
  );
}

export function resetPasswordAPI(request = null) {
  return axiosRequestHandler(
    "POST",
    API_ENDPOINT + "user/resetpassword",
    {
      newPassword: request.payload.newPassword,
      confirmNewPassword: request.payload.confirmNewPassword,
      token: request.payload.token
    },
    ""
  );
}

export function changePasswordAPI(request = null) {
  let token = "Bearer " + request.payload.authToken;
  let config = {
    headers: {
      "Content-Type": "application/json-patch+json",
      Authorization: token
    }
  };

  let data = {
    currentPassword: request.payload.currentPassword,
    newPassword: request.payload.newPassword,
    confirmNewPassword: request.payload.confirmPassword
  };
  return axiosRequestHandler(
    "POST",
    API_USER + "user/changepassword",
    data,
    config
  );
}
