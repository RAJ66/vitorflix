import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import RegistrationVideo from "./pages/registration/Video";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/registration/video" component={RegistrationVideo} />

      <Route component={() => <h1>Error 404</h1>} />
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);
