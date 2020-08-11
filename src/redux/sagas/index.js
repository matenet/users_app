import { all } from 'redux-saga/effects';

import { usersLoad, newUserSave } from './usersSagas';

export default function* rootSaga() {
  yield all([
    usersLoad(),
    newUserSave()
  ])
}
