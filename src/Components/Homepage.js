import "./CssFiles/Homepage.css";
import { NavLink } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="home_container">
      <h1>GAME TIME </h1>
      <nav>
        <NavLink className="home_link" to="/game">
          <button>START GAME</button>
        </NavLink>
      </nav>
    </div>
  );
};
export default Homepage;
