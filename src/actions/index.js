//import index from "../api/index";
import axios from "axios";

const ROOT_URL = "http://localhost:3001";

export const handleChangeValue = e => {
  return {
    type: "ENTER_VALUE",
    text: e.target.value
  };
};

export const handleModal = () => {
  return {
    type: "CLOSE_MODAL"
  };
};

export const addValue = value => async dispatch => {
  const person = await axios.post(`${ROOT_URL}/person`, {
    val: value
  });

  dispatch({ type: "ADD_PERSON_VALUE", payload: person.data });

  const facility = await axios.post(`${ROOT_URL}/facility`, {
    val: person.data.val
  });

  dispatch({ type: "ADD_FACILITY_VALUE", payload: facility.data });

  const exposure = await axios.post(`${ROOT_URL}/exposure`, {
    val: person.data.val
  });

  console.log(facility.data, person.data);
  dispatch({
    type: "ADD_EXPOSURE_VALUE",

    payload: facility.data.val * person.data.val
  });
};
