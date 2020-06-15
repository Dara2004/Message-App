import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import { devToolsEnhancer } from "redux-devtools-extension";

const store = createStore(reducers, devToolsEnhancer()); //the reducers set the initial state

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
