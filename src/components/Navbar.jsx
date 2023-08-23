import "./styles/Navbar.css"
import { FaPlus } from "react-icons/fa"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-sticky">
        <div className="navbar__logo">
          <div className="logo1">
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
          <div className="logo2">
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
        </div>
        <div className="container_links_navbar">
        <div className="navbar_links_left">
          <ul className="ul-navbar">
            <li className="li-navbar">
              <a href="#live">Live</a>
            </li>
            <li className="li-navbar">
              <a href="#push">Push</a>
            </li>
            <li className="li-navbar">
              <a href="#link">Link</a>
            </li>
            <li className="li-navbar">
              <a href="#shop">Shop</a>
            </li>
            <li className="li-navbar">
              <a href="#packs">Packs</a>
            </li>
            <li className="li-navbar">
              <a href="#help">Help</a>
            </li>
            <li className="li-navbar">
              <a href="#more">More <FaPlus/></a>
            </li>
          </ul>
        </div>
        <div className="navbar_links_right">
        <li className="li-navbar" >
            <a id="Try" href="#Try">Try Live for Free</a>
          </li>

          <li className="li-navbar">
            <a href="#login">Login</a>
          </li>
          <li className="li-navbar">
            <a href="#signup">Sign Up</a>
          </li>

        </div>
      </div>
      </div>
      <div className="navbar-top">
        <ul className="navbar-top1">
          <li className="li-navbar">
            <a href="#about">About</a>
          </li>
          <li className="li-navbar">
            <a href="Jobs">Jobs</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
