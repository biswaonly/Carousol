import {
  CHANGE_SLIDE,
  GET_DATA,
  DATA_ERROR,
  UPDATE_STATE,
  CHANGE_SIZE
} from "./types";
import data from "../data/data.json";

export const loadData = () => async dispatch => {
  try {
    dispatch({
      type: GET_DATA,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: DATA_ERROR
    });
  }
};

export const changeSlide = e => dispatch => {
  dispatch({
    type: CHANGE_SLIDE,
    payload: e
  });
};

export const updateState = (height, width) => dispatch => {
  dispatch({
    type: UPDATE_STATE,
    payload: { height, width }
  });
};

export const changeCarouselSize = (height, width) => dispatch => {
  dispatch({
    type: CHANGE_SIZE,
    payload: { height, width }
  });
};
