import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import userReducer from "./store/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";


const store = configureStore({
  reducer: {
    userReducer: userReducer,
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.Fragment>
);
