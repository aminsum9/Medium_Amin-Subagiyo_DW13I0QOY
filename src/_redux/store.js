import { createStore, combineReducers, applyMiddleware } from "redux";

import { categories } from "../_reducers/categories";
import { postarticle } from "../_reducers/post-article";

import { promise, logger } from "./middleware";

//GET All reducers avaiable
const rootReducers = combineReducers({
  categories,
  postarticle
});

//SetUp Store Redux
const store = createStore(rootReducers, applyMiddleware(promise, logger));

export default store;
