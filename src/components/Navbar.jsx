import "./styles/Navbar.css"
import { useState, useEffect } from "react"

const Navbar = () => {
  const [showTopNav, setShowTopNav] = useState(true)

  useEffect(() => {
    let lastScrollTop = 0

    const handleScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop
      if (scrollTop > lastScrollTop) {
        setShowTopNav(false) 
      } else {
        setShowTopNav(true) 
      }
      lastScrollTop = scrollTop
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav className="navbar">
      <div className={`navbar-sticky ${!showTopNav ? "hidden" : ""}`}>
        <div className="navbar__logo">
          {/* Aquí puedes añadir un logo o imagen de perfil si lo deseas */}
          <h1>Kevin Duhamel</h1>
        </div>
        <div className="container_links_navbar">
          <ul className="ul-navbar">
            <li className="li-navbar">
              <a href="#home">Home</a>
            </li>
            <li className="li-navbar">
              <a href="#stack">Stack</a>
            </li>
            <li className="li-navbar">
              <a href="#projects">Projects</a>
            </li>
            <li className="li-navbar">
              <button onClick={() => (window.location.href = "mailto:kevinduhamelh@gmail.com")}>
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
