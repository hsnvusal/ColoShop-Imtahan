import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import React from "react";
import Router from "./router/router";
import { Provider } from 'react-redux'
import store from "./redux/store";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
