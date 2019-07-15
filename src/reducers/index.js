import { combineReducers } from 'redux';

import searchName from './employeeNameReducer';
import employees from './employeesReducer';

export default combineReducers({
  searchName,
  employees,
});
