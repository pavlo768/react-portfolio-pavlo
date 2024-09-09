import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin, FaGithub, FaInstagram, FaTelegram, FaDiscord } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="mx-2 w-14" />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/pavlo-radionov-7191a21ba/" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
          <FaLinkedin />
        </a>
        <a href="https://github.com/pavlo768" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/golini978/?next=%2F" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
          <FaInstagram />
        </a>
        <a href="https://t.me/legend_202" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
          <FaTelegram />
        </a>
        <a href="https://discordapp.com/users/435771427724197888/" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
          <FaDiscord />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
