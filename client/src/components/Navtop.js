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
      <a href={navOptions.none} className="active">
        <img src="images/header/abduction-tablet.gif" alt="test" />
      </a>
      <a className="navBar" href="#test">
        Test
      </a>
      <a className="navBar" href="#test">
        Test
      </a>
      <a className="navBar" href="#test">
        Test
      </a>
      <a className="navBar" href="#test">
        Test
      </a>
      <a href={navOptions.none} className="icon" onClick={handleOnClick}>
        &#9776;
      </a>
    </nav>
  );
}
