import React, { useState } from "react";
// Import CSS File Dependency
import "../css/top-nav.css";
// Import Objects
import { navOptions } from "./Objects";

export default function Nav() {
  const [desktopNav, mobileNav] = useState(navOptions.desktop);

  const handleOnClick = () => {
    if (desktopNav === navOptions.desktop) {
      mobileNav(navOptions.mobile);
    } else {
      mobileNav(navOptions.desktop);
    }
  };

  return (
    <nav>
      <a href={navOptions.none} className="active">
        <img src="images/navigation/top/test.png" alt="test" />
      </a>
      <a href="#test">Test</a>
      <a href="#test">Test</a>
      <a href={navOptions.none} className="icon" onClick={handleOnClick}>
        &#9776;
      </a>
    </nav>
  );
}
