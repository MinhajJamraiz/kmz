import "./../../styles/header.css";
import { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import hamburger from "./../../images/hamburger.png";
import cross from "./../../images/cross.png";

const Header = () => {
  const [user, isAuth] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [image, setImage] = useState(hamburger);

  const authLinks = (
    <ul className="list nav__list collapsible__content">
      <li className="nav__item">
        <Link to="/chatbox">EaseBot</Link>
      </li>

      <li className="nav__item">
        <Link to="/reportAnalysis">Report Analysis</Link>
      </li>
      <li className="nav__item">
        <Link to="/xrayAnalysis">Xray Analysis</Link>
      </li>

      <li className="nav__item nav__profile-item">
        <Link to="/userProfile">
          <img
            className="nav__profile-image"
            src={cross}
            alt="User Profile Image"
          />
        </Link>
      </li>
    </ul>
  );
  const GuestLinks = (
    <ul className="list nav__list collapsible__content">
      <li className="nav__item">
        <Link to="/signup">Signup</Link>
      </li>
      <li className="nav__item">
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  const toggleDropdown = () => {
    setToggled(!toggled);
    setImage(toggled ? hamburger : cross);
  };
  return (
    <div>
      <div
        className={
          toggled ? "nav collapsible collapsible--expanded" : "nav collapsible"
        }
      >
        <Link to="/">
          <button className="header-main-btn">Karwan i al Muez</button>
        </Link>

        <a href="#!">
          <img
            className="icon icon--white nav__menu-btn collapsible__icon"
            src={image}
            onClick={toggleDropdown}
            alt=""
          />
        </a>

        {!user && <Fragment>{user ? authLinks : GuestLinks}</Fragment>}
      </div>
    </div>
  );
};

export default Header;
