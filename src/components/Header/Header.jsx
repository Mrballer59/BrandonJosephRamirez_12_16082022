import React from "react";
import "./Header.css";
import logo from "../../assets/logosport.png";

const Header = () => {
  return (
    <header className="mainHeader">
      <img className="logo" alt="logo of company" src={logo} />
      <a href="#">Accueil</a>
      <a href="#">Profil</a>
      <a href="#">Réglage</a>
      <a href="#">Communauté</a>
    </header>
  );
};

export default Header;
