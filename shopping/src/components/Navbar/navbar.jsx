import React, { useState } from "react";
import { Link} from "react-router-dom";
import Logo from "../image/1-removebg-preview.png";
import Style from "./navbar.module.css";
import { useValue } from "../../itemContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons"; // Importing the menu icon

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const {handleSearch} = useValue();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleLogin = () => {
    const userID = localStorage.getItem('userID');
    const token = localStorage.getItem('token');
    if (userID && token) {
      localStorage.removeItem('userID');
      localStorage.removeItem('token');
      setIsLogin(!isLogin);
    } else if(!userID==="" && !token==="") {
       setIsLogin(isLogin);
    }
  };
  console.log(localStorage.getItem('userID'));

  return (
    <>
      <nav className={Style.nav}>
        <div className={Style.container}>
          <input
            type="checkbox"
            className={Style.toggle}
            id="toggle"
            onClick={toggleMenu}
          />
          <label htmlFor="toggle" className={Style.toggleLabel}>
            <FontAwesomeIcon icon={faBars} className={Style.menuIcon} />
          </label>
          <Link to="/" className={Style.logo}>
            <img src={Logo} alt="Bazar Apna Logo" /> BAZAR
          </Link>
          <ul className={`${Style.menu} ${isMenuOpen ? Style.open : ""}`}>
            <li>
              <Link to="/" className={Style.link}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className={Style.link}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/" className={Style.link}>
                About
              </Link>
            </li>
          </ul>
          <div className={Style.cta}>
            <form className={Style.search}>
              <input placeholder="Search" className={Style.input} onChange={handleSearch} />
              <button type="button" className={Style.button}>
                Search
              </button>
              <Link to={localStorage.length ? "/CardModal" :"/login"} className={Style.button} >
                <span className={Style.shopping}>
                  <FontAwesomeIcon icon={faShoppingCart}/>
                </span>
              </Link>
              <Link to="/Login" className={Style.button} onClick={toggleLogin}>
                  {isLogin? "Logout" : "Login"}
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
