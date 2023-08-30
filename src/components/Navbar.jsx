import "./styles/Navbar.css"
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-sticky">
        <div className="navbar__logo">
          <ul className="ul-navbar">
          <li className="li-navbar">
              <a href="#home">Kevin Duhamel</a>
            </li>
            <li className="li-navbar">
              <a href="#stack">Stack</a>
            </li>
            <li className="li-navbar">
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>
        <div className="container_links_navbar">
          <ul className="ul-navbar">
            
            <li>
              {" "}
              <a
                className="a-footer"
                href="https://www.facebook.com/kevinduhamelhayes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f">
                  <FaFacebook color="#435998" size={30} />
                </i>
              </a>
            </li>
            <li>
              <a
                className="a-footer"
                href="https://www.instagram.com/kevinduhamelhayes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram">
                  <FaInstagram color="#FF891E" size={30} />
                </i>
              </a>
            </li>
            <li>
              <a
                className="a-footer"
                href="https://www.linkedin.com/in/kevin-duhamel-hayes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin color="#0A66C2" size={30} />
              </a>
            </li>
            <li>
              <a
                className="a-footer"
                href="https://github.com/kevinduhamelhayes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram">
                  <FaGithub color="#9733F7" size={30} />
                </i>
              </a>
            </li>
            <li className="li-navbar">
              <button
                onClick={() =>
                  (window.location.href = "mailto:kevinduhamelh@gmail.com")
                }
              >
                Contact Me
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
