import axios from 'axios';
import {
  FETCH_SEARCH_EMPLOYEE_PENDING,
  FETCH_SEARCH_EMPLOYEE_SUCCESS,
  FETCH_SEARCH_EMPLOYEE_FAILED,
} from './types';

const fetchEmployeeStart = () => ({
  type: FETCH_SEARCH_EMPLOYEE_PENDING,
});

const fetchEmployeeSuccess = data => ({
  type: FETCH_SEARCH_EMPLOYEE_SUCCESS,
  payload: data,
});

const fetchEmployeeFail = error => ({
  type: FETCH_SEARCH_EMPLOYEE_FAILED,
  payload: error,
});

export const searchEmployee = searchName => async dispatch => {
  dispatch(fetchEmployeeStart());
  try {
    const { data } = await axios.get(`/${searchName}`);
    dispatch(fetchEmployeeSuccess(data));
  } catch (error) {
    dispatch(fetchEmployeeFail(error.message));
  }
};
