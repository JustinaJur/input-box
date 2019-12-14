import { combineReducers } from "redux";

const initialState = {
  isModalOpen: false,
  result: null
};

const chainApiReducer = (state = initialState, action) => {
  if (action.type === "ADD_FACILITY_VALUE") {
    return { ...state, result: action.payload, isModalOpen: true };
  }
  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false };
  }
  return state;
};

export default combineReducers({
  chainApi: chainApiReducer
});
