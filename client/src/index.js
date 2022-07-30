import React, { StrictMode } from "react";
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";

import "materialize-css/dist/css/materialize.css";
import { applyMiddleware, legacy_createStore } from "redux";
import App from "./components/App";
const store = legacy_createStore(reducers, {}, applyMiddleware(reduxThunk));
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
console.log("STRIPE KEY IS", process.env.REACT_APP_STRIPE_KEY);
console.log("Environment is ", process.env.NODE_ENV);
