import "./Footer.css";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a
        href="https://github.com/LucasHouska"
        target="_blank"
        rel="noopener noreferrer"
        className="github-icon"
      >
        <FaGithub />
      </a>
    </footer>
  );
};

export default Footer;
