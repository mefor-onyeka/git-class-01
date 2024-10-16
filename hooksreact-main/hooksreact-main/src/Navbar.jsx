import { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

import "./navbar.css";
import { HiMiniEnvelopeOpen } from "react-icons/hi2";
import { Link } from "react-router-dom";
const Navbar = ({ numberOfItems }) => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
    // console.log("wowww");
  };
  return (
    <div className="navbar">
      <div className="logo">
        <HiMiniEnvelopeOpen size={30} />
        <h1>CODIVIN</h1>
      </div>
      <ul className={`navlink ${menu ? "menuvisible" : ""} `}>
        <ul className="list">
          <Link to="/">
            <li>
              Home<div className="hh"></div>
            </li>
          </Link>
          <Link to="/about">
            <li>
              About<div className="hh"></div>
            </li>
          </Link>
          <Link to="/contact">
            <li>
              Contact<div className="hh"></div>
            </li>
          </Link>
        </ul>
      </ul>
      <div className="cart">
        <MdOutlineShoppingCart size={28} />
        <p className="cartNum">{numberOfItems}</p>
      </div>
      <div className="icon" onClick={handleMenu}>
        <div className={`bars ${menu ? "barone" : ""} `}></div>
        <div className={`bars ${menu ? "bartwo" : ""} `}></div>
        <div className={`bars ${menu ? "barthree" : ""} `}></div>
      </div>
    </div>
  );
};

export default Navbar;
