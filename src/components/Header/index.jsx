import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

function Header() {
  return (
    <header>
      <Link to="/" className="soon">
        Filmaria
      </Link>
      <Link to="/salvo" className="favorite">
        Salvo
      </Link>
    </header>
  );
}

export default Header;
