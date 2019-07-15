import { SET_SEARCH_NAME } from '../actions/types';

const initialState = {
  name: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};
