import React, { Fragment } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { ThemeProvider } from "styled-components";
// Redux store provider
import { Provider } from "react-redux";
import { store, history, persistor } from "./redux/store";
// Style Root for making media queries to inline css
import { StyleRoot } from "radium";
// Layout Routes
import layoutRoutes from "./routes/index.jsx";
import themes from "./settings/themes";
import AppLocale from "./languageProvider";
import { themeConfig } from "./settings";
import config, { getCurrentLanguage } from "./settings/languageConfig";
import { PersistGate } from "redux-persist/integration/react";
import "./assets/scss/app.scss";
import "pretty-checkbox/src/pretty-checkbox.scss";

const currentAppLocale =
  AppLocale[getCurrentLanguage(config.defaultLanguage || "english").locale];

const App = props => {
  return (
    <Fragment>
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}
      >
        <ThemeProvider theme={themes[themeConfig.theme]}>
          <StyleRoot>
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                {/*Start layout routes */}
                <Router history={history}>
                  <Switch>
                    <Route
                      exact
                      path="/"
                      render={() => <Redirect to="/Intro" />}
                    />
                    {layoutRoutes.map((prop, key) => {
                      return (
                        <Route
                          path={prop.path}
                          component={prop.component}
                          key={key}
                          history={history}
                        />
                      );
                    })}
                  </Switch>
                </Router>
                {/*End layout routes */}
              </PersistGate>
            </Provider>
          </StyleRoot>
        </ThemeProvider>
      </IntlProvider>
    </Fragment>
  );
};

export default App;

// If you want to choose different color schema go to settings/index.jsx and set your theme and language.

// If you want to change sidebar nav list then go to util/data/sidebar.jsx
