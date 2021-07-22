import React, { useState } from "react";
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
      <a href={navOptions.none}>
        <img
          src="images/nav/top/nav-logo.png"
          alt="Database Of Unidentified Flying Object Sightings"
        />
      </a>
      <a className="navBar" href="#test">
        Info
      </a>
      <a className="navBar" href="#test">
        Sightings
      </a>
      <a href={navOptions.none} className="icon" onClick={handleOnClick}>
        &#9776;
      </a>
    </nav>
  );
}
