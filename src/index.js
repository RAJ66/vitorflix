import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route component={() => <h1>Error 404</h1>} />
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);
