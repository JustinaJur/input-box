import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3001"
});

// const ENDPOINT = "http://localhost:3001";

// export const addPerson = async personValue => {
//   try {
//     const response = await axios.post(`${ENDPOINT}/person`, {
//       val1: personValue,
//       val2: personValue
//     });

//     return response.data;
//   } catch (ex) {
//     return null;
//   }
// };

// export const addFacility = async facilityValue => {
//   try {
//     const response = await axios.post(`${ENDPOINT}/facility`, {
//       val3: facilityValue,
//       val4: facilityValue
//     });

//     return response.data;
//   } catch (ex) {
//     return null;
//   }
// };

// export const addExposure = async exposureValue => {
//   try {
//     const response = await axios.post(`${ENDPOINT}/exposure`, {
//       val5: exposureValue
//     });

//     return response.data;
//   } catch (ex) {
//     return null;
//   }
// };
