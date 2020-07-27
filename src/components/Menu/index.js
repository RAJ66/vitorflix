import React from "react";
import Logo from "../../assets/img/vitorflix.png";
import "./Menu.css";
import ButtonLink from "./components/ButtonLink";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="VitorFlix" />
      </a>
      <ButtonLink className="ButtonLink" href="/">
        New Video
      </ButtonLink>
    </nav>
  );
}

export default Menu;
