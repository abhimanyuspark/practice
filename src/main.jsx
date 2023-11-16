import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import GlobalStore from "./Redux/Redux-Store/ReduxStore";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={GlobalStore}>
      <App />
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>,
);
