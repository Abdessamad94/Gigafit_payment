import React from "react";
import { FaUserAlt } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://gigafit.fr/wp-content/uploads/2021/03/Logo-Gigafit-V4-blanc-et-vert-.png"
      />
      <div className="plus"><span>Vous avez un compte ?</span></div>
    </div>
  );
}

export default Navbar;
