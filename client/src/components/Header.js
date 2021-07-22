// Importing a CSS file
import "../css/header.css";

export default function Header() {
  return (
    <header className="user-section">
      <ul className="ul-user-section">
        <li className="login">Sign In</li>
        <li className="joins">Join Us</li>
      </ul>
    </header>
  );
}
