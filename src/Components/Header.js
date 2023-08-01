import { NavLink } from "react-router-dom";
import "./CssFiles/Header.css";
import React from "react";
import HelpIcon from "@mui/icons-material/Help";
const Header = () => {
  return (
    //the header contains the name of the program and we can also use it to link back to the home page.
    //we also have the help button to link the user to the page that explains the game.
    //use react-router-dom Navlink to move cross pages.
    <div className="header">
      <nav className="nav_head">
        <NavLink className="home" to="/">
          <h1>HANGMAN GAME</h1>
        </NavLink>
        <NavLink className="help" to="/help">
          <p>How to play</p>
          <HelpIcon size="large" />
        </NavLink>
      </nav>
    </div>
  );
};
export default Header;
