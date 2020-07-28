import React from "react";
import Logo from "../../assets/img/vitorflix.png";
import "./Menu.css";
import Button from "../Button/";

import { Link } from "react-router-dom";
//import ButtonLink from "./components/ButtonLink";

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="VitorFlix" />
      </Link>
      <Button as={Link} className="ButtonLink" to="/registration/video">
        New Video
      </Button>
    </nav>
  );
}

export default Menu;
