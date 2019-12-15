import { put, takeLatest, call } from "redux-saga/effects";
import { loginUserService, logoutUserService } from "../../services/Auth";

function* login(payload = null) {
  console.log("SAGA CALLED");
  debugger;
  const response = yield call(loginUserService, payload);

  try {
    switch (response.status) {
      case 200:
        yield put({
          type: "LOGIN_SUCCESS",
          loginSuccess: true,
          authToken: response.data.data.access_token
        });
        break;
      case 400:
        yield put({ type: "LOGIN_FAILED", loginFailed: true });
        break;
      case 401:
        yield put({ type: "TOKEN_EXPIRE" });
        break;
      default:
        yield put({ type: "SERVER_FAILED", serverFailed: true });
        break;
    }
  } catch (e) {
    console.log(e);
  }
}

function* logout(payload = null) {
  try {
    const response = yield call(logoutUserService, payload.payload);
    if (response.data.status == 200) {
      yield put({ type: "LOGOUT_SUCCESS" });
    }
  } catch (error) {
    yield put({ type: "SERVER_FAILED", serverFailed: true, error });
  }
}

export function* actionWatchersLogin() {
  yield takeLatest("LOGIN", login);
}

export function* actionWatchersLogout() {
  yield takeLatest("LOGOUT", logout);
}
