import { USERS } from '../constants';

const loadUsers = () => ({
  type: USERS.LOAD
});

const setUsers = posts => ({
  type: USERS.LOAD_SUCCESS,
  payload: posts
});

const setError = error => ({
  type: USERS.LOAD_FAIL,
  payload: error
});

const saveNewUser = (userData) => ({
  type: USERS.SAVE_NEW,
  data: userData
});

const setSnackbarValidOpen = (isOpen) => ({
  type: USERS.SET_SNACKBAR_VALID,  //TO DO
  snackbarValidOpen: isOpen,
});

const setSnackbarErrorOpen = (isError) => ({
  type: USERS.SAVE_NEW,  //TO DO
  snackbarErrorOpen: isError
});

export { loadUsers, setError, setUsers, saveNewUser, setSnackbarValidOpen, setSnackbarErrorOpen};
