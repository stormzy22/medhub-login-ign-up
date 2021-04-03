import Minmenu from "./minmenu/Minmenu";
import "@fortawesome/fontawesome-free/css/all.css";
import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="socials">
        <div>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>
      <header className="header">
        <div className="logo">
          <a href="/">Logo</a>
          <div className="menu" onClick={() => setMenu(!menu)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        {/* -------------------------------- */}
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li className="j-btn">
            <a href="/">Join</a>
          </li>
        </ul>
      </header>
      {/* --------------------------------- */}
      {menu ? <div className="min-menu">{<Minmenu />}</div> : ""}
    </>
  );
};

export default Header;
