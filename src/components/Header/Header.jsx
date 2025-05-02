import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
