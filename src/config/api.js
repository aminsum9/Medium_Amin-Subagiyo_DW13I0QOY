// Learn more or give us feedback
import axios from "axios";
import {BASE_URL} from './host.js';

export const API = axios.create({
  baseURL: BASE_URL
});

export const register = newUser => {
  return API
    .post("api/v1/register", {
      name: newUser.name,
      username: newUser.username,
      email: newUser.email,
      password: newUser.password,
      role: 1,
      image:
        "https://pbs.twimg.com/profile_images/831173492968140804/43M7c5j_.jpg",
      phone: newUser.phone
    })
    .then(response => {
      if (response.data.token === undefined) {
      } else {
        localStorage.setItem("token", response.data.token);
        return response.data;
      }
    })
    .catch(err => {
      //
    });
};

export const login = user => {
  return API
    .post("api/v1/login", {
      email: user.email,
      password: user.password
    })
    .then(response => {
      if (response.data.token === undefined) {
      } else {
        localStorage.setItem("token", response.data.token);
        return response.data;
      }
    })
    .catch(err => {
      //
    });
};

export const updateProfile = data => {
  const token = localStorage.getItem("token");
  API.defaults.headers["Authorization"] = "Bearer " + token;
  return API
    .put(`api/v1/profile/edit`, data)
    .then(response => alert(response.data.message));
};

export const favorite = data => {
  const token = localStorage.getItem("token");
  API.defaults.headers["Authorization"] = "Bearer " + token;
  return API
    .post("api/v1/favorite", data)
    .then(response => {
      return response;
    });
};
