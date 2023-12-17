import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TodoContextProvider from "./Context/TodoContext";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TodoContextProvider>
    <App />
  </TodoContextProvider>
);
