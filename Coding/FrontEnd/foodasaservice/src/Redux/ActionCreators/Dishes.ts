import * as ActionTypes from 'Redux/Actions/actions';
import axios, { AxiosResponse } from 'axios';
import baseURL from 'axios-config';

export const fetchTopDishes = () => dispatch => {
  dispatch(dishesLoading(true));
  return axios
    .get(baseURL + '/Dishes.json')
    .then(
      (response: AxiosResponse) => {
        return response;
      },
      error => {
        var errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then(response => {
      dispatch(addDishes(response.data), dispatch(dishesLoading(false)));
    })
    .catch(error => {
      dispatch(dishesFailed(error.message), dispatch(dishesLoading(false)));
    });
};

export const addDishes = dishes => ({
  type: ActionTypes.FETCH_TOP_DISHES,
  payload: dishes
});

export const dishesFailed = errorMessage => ({
  type: ActionTypes.TOP_DISHES_LOADING_FAILED,
  payload: errorMessage
});

export const dishesLoading = value => ({
  type: ActionTypes.DISHES_LOADING,
  payload: value
});