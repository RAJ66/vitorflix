import React from "react";
import Logo from "../../assets/img/vitorflix.png";
import "./Menu.css";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="VitorFlix" />
      </a>
    </nav>
  );
}

export default Menu;
