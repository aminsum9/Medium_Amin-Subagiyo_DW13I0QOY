import { POST_ARTICLE } from "../config/constants";
import axios from "axios";
//Setup Action Redux INC
export const postArticle = (data) => {
  const token = localStorage.getItem("token");
  
  return {
    type: POST_ARTICLE,
    payload: axios({
      method: "POST",
      url: "http://localhost:5000/api/v1/article",
      data: data,
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "multipart/form-data",
      },
    }),
  };
};
