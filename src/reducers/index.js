import { combineReducers } from "redux";

const initialState = {
  isModalOpen: false,
  result: null
};

const inputReducer = (state = initialState, action) => {
  if (action.type === "ENTER_VALUE") {
    return action.text;
  }
  return state;
};

const apiReducer = (state = initialState, action) => {
  if (action.type === "ADD_EXPOSURE_VALUE") {
    return { ...state, result: action.payload, isModalOpen: true };
  }
  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false };
  }
  return state;
};

export default combineReducers({
  api: apiReducer
});
