import { Link } from "react-router-dom";
// Importing a CSS file
import "../css/header.css";

export default function Header() {
  return (
    <header className="user-section">
      <ul className="ul-user-section">
        <li>
          <Link className="login" to="/signin">
            Sign In
          </Link>
        </li>
        <li>
          <Link className="joins" to="/joinus">
            Join Us
          </Link>
        </li>
      </ul>
    </header>
  );
}
