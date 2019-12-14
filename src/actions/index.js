import axios from "axios";

const ROOT_URL = "http://localhost:3001";

// export const handleChangeValue = e => {
//   return {
//     type: "ENTER_VALUE",
//     text: e.target.value
//   };
// };

export const handleModal = () => {
  return {
    type: "CLOSE_MODAL"
  };
};

export const addValue = value => async dispatch => {
  const person = await axios.post(`${ROOT_URL}/person`, {
    val1: value,
    val2: value
  });
  dispatch({ type: "ADD_PERSON_VALUE", payload: person.data });

  const facility = await axios.post(`${ROOT_URL}/facility`, {
    val3: person.data.val1,
    val4: person.data.val1
  });

  dispatch({
    type: "ADD_FACILITY_VALUE",
    payload: facility.data.val3 * facility.data.val4
  });

  const exposure = await axios.post(`${ROOT_URL}/exposure`, {
    val5: person.data.val2
  });

  dispatch({
    type: "ADD_EXPOSURE_VALUE",
    payload: exposure.data
  });
};
