import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { devToolsEnhancer } from "redux-devtools-extension";
import { createInitialReduxState } from "./utils/functions";
import thunk from 'redux-thunk';
import { Loader } from "./components/Loader";

function Root() {
  //fetch the initial data
  const [initialState, setInitialState] = useState({});
  useEffect(() => {
    fetch("http://localhost:9000/").then((res) => {
      res.json().then(dataFromBackend => {
        setInitialState(createInitialReduxState(dataFromBackend));
        console.log(dataFromBackend);
      }).catch(e => {
        console.log(e);
      });
    })
  }, []);
  if (Object.keys(initialState).length === 0) {
    return <Loader />
  }
  console.log(initialState);
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk)); //the reducers set the initial state
  return (<>
    <Provider store={store}>
      <App />
    </Provider>,
  </>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById("root")
);
