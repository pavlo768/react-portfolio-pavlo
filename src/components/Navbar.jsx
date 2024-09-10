import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaTelegram, FaDiscord } from "react-icons/fa";
import "./Navbar.css"; // підключення CSS файлу

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo" className="logo-image" />
      </div>

      <div className="navbar-icons">
        <a href="https://www.linkedin.com/in/pavlo-radionov-7191a21ba/" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaLinkedin />
        </a>
        <a href="https://github.com/pavlo768" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/golini978/?next=%2F" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaInstagram />
        </a>
        <a href="https://t.me/legend_202" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaTelegram />
        </a>
        <a href="https://discordapp.com/users/435771427724197888/" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaDiscord />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
