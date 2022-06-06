import { GET_ALL_CARS, CARS_ERROR } from "./types";
const { REACT_APP_API_FILTER_CAR } = process.env;

export const getAllCars = (params) => async (dispatch) => {
  try {
    const { tanggal, jam, penumpang } = params;
    const response = await fetch(REACT_APP_API_FILTER_CAR + `${tanggal}/:${jam}/${penumpang}`);
    const data = await response.json();

    dispatch({
      type: GET_ALL_CARS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CARS_ERROR,
      payload: error.response,
    });
  }
};
