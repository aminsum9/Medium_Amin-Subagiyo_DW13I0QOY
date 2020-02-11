import { GET_CATEGORIES } from "../config/constants";

const initialState = {
  categories: [],
  isLoading: false,
  error: false
};

export const categories = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_CATEGORIES}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_CATEGORIES}_FULFILLED`:
      console.log(action.payload);
      return {
        ...state,
        categories: action.payload.data,
        isLoading: false
      };
    case `${GET_CATEGORIES}_REJECTED`:
      return {};
    default:
      return state;
  }
};
