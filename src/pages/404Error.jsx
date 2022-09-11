import "../style/404Error.css";
import { Link } from "react-router-dom";
import React from "react";

function Page404() {
  return (
    <section className="section404">
      <h3>404</h3>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="backHomeLink">
        Retourner sur la page d'accueil
      </Link>
    </section>
  );
}

export default Page404;
