import { USERS } from '../constants';

const usersReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case USERS.LOAD_SUCCESS:
      return action.payload.data;
    case USERS.LOAD_FAIL:
      return action.payload;
    case USERS.SAVE_NEW:
      return {
        ...state,
        userData: action.data
      }
    case USERS.SET_SNACKBAR_VALID:
      return {
        ...state,
        snackbarValidOpen: action.payload.data
      }

    default:
      return state;
  }
};

export default usersReducer;
