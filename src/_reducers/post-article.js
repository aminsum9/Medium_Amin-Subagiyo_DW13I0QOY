import { POST_ARTICLE } from "../config/constants";

const initialState = {
  postarticle: [],
  isLoading: false,
  error: false
};

export const postarticle = (state = initialState, action) => {
  switch (action.type) {
    case `${POST_ARTICLE}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${POST_ARTICLE}_FULFILLED`:
      return {
        ...state,
        postarticle: action.payload.postarticle,
        isLoading: false
      };
    case `${POST_ARTICLE}_REJECTED`:
      return {};
    default:
      return state;
  }
};
