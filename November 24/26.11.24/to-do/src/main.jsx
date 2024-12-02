import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
