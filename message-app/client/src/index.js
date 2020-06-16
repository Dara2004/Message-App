import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import { devToolsEnhancer } from "redux-devtools-extension";
import data from "./dataFromBackend";
import { createInitialReduxState } from "./utils/functions";

const initialState = createInitialReduxState(data);
const store = createStore(reducers, initialState, devToolsEnhancer()); //the reducers set the initial state

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
