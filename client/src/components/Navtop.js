import React, { useState } from "react";
import { Link } from "react-router-dom";
// Import CSS File Dependency
import "../css/top-nav.css";
// Import Objects
import { navOptions } from "./Objects";

export default function Navtop() {
  const [desktopNav, mobileNav] = useState(navOptions.desktop);

  const handleOnClick = () => {
    if (desktopNav === navOptions.desktop) {
      mobileNav(navOptions.mobile);
    } else {
      mobileNav(navOptions.desktop);
    }
  };

  return (
    <nav className={desktopNav} id="myTopnav">
      <Link className="linkstyles" to="/">
        <img
          src="images/nav/top/nav-logo.png"
          alt="Database Of Unidentified Flying Object Sightings"
        />
      </Link>
      <Link className="navBar linkstyles" to="/info">
        Info
      </Link>
      <Link className="navBar linkstyles" to="/map">
        Sightings
      </Link>
      <Link
        to={navOptions.none}
        className="icon linkstyles"
        onClick={handleOnClick}
      >
        &#9776;
      </Link>
    </nav>
  );
}
