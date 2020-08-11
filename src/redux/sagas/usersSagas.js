import { call, fork, put, take } from 'redux-saga/effects';

import { USERS } from '../constants';
import { setUsers, setError, saveNewUser, setSnackbarValidOpen } from '../actions/usersActions'
import { get, post } from '../api'

export function* handleUsersLoad() {
  try {
    const users = yield call(get, 'https://reqres.in/api/users');
    yield put(setUsers(users))
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export function* handleUsersSaveNew(userData) {
  try {
    const snackbarValidOpen = true;
    const postToApi = yield call(post, 'https://reqres.in/api/users', userData);
      yield put(setSnackbarValidOpen(snackbarValidOpen))
  } catch (error) {
    alert("setSnackbarValidOpen error");
    // yield put(setError(error.toString()));
  }
}
export function* usersLoad() {
  const payload = yield take(USERS.LOAD);
  yield fork(handleUsersLoad, payload)
}
export function* newUserSave() {
  const save = yield take(USERS.SAVE_NEW)
  yield fork(handleUsersSaveNew, save)
}

