import { NavLink } from "react-router-dom";
import "./Header.css";
import React from "react";
import HelpIcon from "@mui/icons-material/Help";
const Header = () => {
  return (
    <div className="header">
      <nav className="nav_head">
        <NavLink className="home" to="/">
          <h1>HANGMAN GAME</h1>
        </NavLink>
        <NavLink className="help" to="/help">
          <HelpIcon size="large" />
        </NavLink>
      </nav>
    </div>
  );
};
export default Header;
