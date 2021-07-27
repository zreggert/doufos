import { Link } from "react-router-dom";
import Auth from "../utils/auth";
// Importing a CSS file
import "../css/header.css";

export default function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="user-section">
      {Auth.loggedIn() ? (
        <ul className="ul-user-section">
          <li>
            <button className="login logout" onClick={logout}>
              Logout
            </button>
          </li>
        </ul>
      ) : (
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
      )}
    </header>
  );
}
