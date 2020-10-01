import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CheckBoxProvider } from "./components/Context/CheckBoxContext";
import { StepsProvider } from "./components/Context/StepsContext.tsx";
import { ButtonsProvider } from "./components/Context/ButtonsContext";
import { PasswordProvider } from "./components/Context/PasswordContext";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import "./locale";

const queryCache = new QueryCache();

ReactDOM.render(
  <ReactQueryCacheProvider queryCache={queryCache}>
    <PasswordProvider>
      <ButtonsProvider>
        <StepsProvider>
          <CheckBoxProvider>
            <App />
          </CheckBoxProvider>
        </StepsProvider>
      </ButtonsProvider>
    </PasswordProvider>
  </ReactQueryCacheProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
