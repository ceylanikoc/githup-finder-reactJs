import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";
import AppRouter from './routers/AppRouter'
import App from "./components/App";

ReactDOM.render(<AppRouter/>, document.getElementById("root"));
