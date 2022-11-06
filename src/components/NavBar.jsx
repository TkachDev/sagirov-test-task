import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = ({ links = [] }) => {
  const [isListVisible, setIsListVisible] = useState(false);

  let navBarClassName = "nav-bar";
  if (isListVisible) navBarClassName += " visible";

  const handleBurgerClick = () => {
    setIsListVisible(!isListVisible)
  }

  return (
    <>
      <div className="nav-burger" onClick={handleBurgerClick}>
        <div />
      </div>
      <div className={navBarClassName}>
        <ul>
          {links.map((link, index) => {
            return (
              <li key={index}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
