import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import createReducer from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// MiddleWares
import createSagaMiddleware from "redux-saga";
import { logger } from "redux-logger";

import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["scrumboard", "themeSetting", "LanguageSwitcher", "themeChanger"]
};
const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);
const middlewares = [logger, sagaMiddleware, routeMiddleware];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, createReducer());
const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);

export { store, history, persistor };
