// Learn more or give us feedback
import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:5002/api/v1"
});

export const register = newUser => {
  return axios
    .post("http://localhost:5000/api/v1/register", {
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
      console.log(err);
    });
};

export const login = user => {
  return axios
    .post("http://localhost:5000/api/v1/login", {
      email: user.email,
      password: user.password
    })
    .then(response => {
      console.log(response);
      if (response.data.token === undefined) {
      } else {
        localStorage.setItem("token", response.data.token);
        return response.data;
      }
    })
    .catch(err => {
      console.log(err);
    });
};

export const updateProfile = data => {
  const token = localStorage.getItem("token");
  axios.defaults.headers["Authorization"] = "Bearer " + token;
  return axios
    .put(`http://localhost:5000/api/v1/profile/edit`, data)
    .then(response => alert(response.data.message));
};

export const favorite = data => {
  const token = localStorage.getItem("token");
  axios.defaults.headers["Authorization"] = "Bearer " + token;
  return axios
    .post("http://localhost:5000/api/v1/favorite", data)
    .then(response => {
      return response;
    });
};
