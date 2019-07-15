import { SET_SEARCH_NAME } from './types';

export const setSearchName = name => dispatch => {
  dispatch({
    type: SET_SEARCH_NAME,
    payload: name,
  });
};
