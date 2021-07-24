import {Link} from 'react-router-dom';
// Importing a CSS file
import "../css/header.css";


export default function Header() {
  return (
    <header className="user-section">
      <ul className="ul-user-section">
        <li className="login">
          <Link to={'/login'} >Sign In</Link>
        </li>
        <li className="joins">
          <Link to={'/signup'} >Join Us</Link>
        </li>
      </ul>
    </header>
  );
}
