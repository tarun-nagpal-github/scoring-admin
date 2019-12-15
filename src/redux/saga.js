import { all } from "redux-saga/effects";
import "regenerator-runtime/runtime";

import { actionWatchersLogin, actionWatchersLogout } from "./auth/authSaga";

export default function* rootSaga() {
  yield all([actionWatchersLogin(), actionWatchersLogout()]);
}
