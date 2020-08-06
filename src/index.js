import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import RegistrationVideo from "./pages/registration/Video";
import RegistrationCaterogy from "./pages/registration/Category";
import Page404 from "./pages/Page404";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/registration/video" component={RegistrationVideo} />

      <Route path="/registration/category" component={RegistrationCaterogy} />

      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);
