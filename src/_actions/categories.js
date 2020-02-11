import { GET_CATEGORIES } from "../config/constants";
import axios from "axios";
//Setup Action Redux INC
export const getCategories = () => {
  return {
    type: GET_CATEGORIES,
    payload: axios({
      method: "GET",
      url: "http://localhost:5002/api/v1/categories"
    })
  };
};
