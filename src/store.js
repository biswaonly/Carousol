import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { CHANGE_SLIDE, GET_DATA, DATA_ERROR, UPDATE_STATE, CHANGE_SIZE } from "./actions/types";

const initialState = {
  data: [],
  selectData: {},
  openedSlide: 1,
  maxDivWidth: 0,
  maxDivHeight: 0,
  carouselHeight: 0,
  carouselWidth: 0
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_DATA:
      return { ...state, data: payload };

    case DATA_ERROR:
      return { ...state, data: {} };

    case CHANGE_SLIDE:
      return { ...state, openedSlide: payload };

    case UPDATE_STATE:
      return {
        ...state,
        maxDivHeight: payload.height,
        maxDivWidth: payload.width,
        carouselHeight: payload.height - 50,
        carouselWidth: payload.width
      };

    case CHANGE_SIZE:
      return {
        ...state,
        carouselHeight: payload.height,
        carouselWidth: payload.width
      };

    default:
      return state;
  }
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
