import "./styles/Footer.css"
import {
  FaLinkedin,
  //FaReddit,
  //FaYoutube,
  FaFacebook,
  //FaTwitter,
  FaInstagram,
  FaGithub,
  FaHeart,
} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-top-left">
            <div className="footer-top-left-title">
              <h1>Kevin Duhamel Hayes</h1>
            </div>
            <div className="footer-top-left-subtitle">
              <a className="a-footer" href="#live">
                Im a developer in continius learning
              </a>
              {/*
              <a className="a-footer" href="#push">
                Push
              </a>
              <a className="a-footer" href="#link">
                Link
              </a>
              <a className="a-footer" href="#shop">
                Shop
              </a>
              <a className="a-footer" href="#packs">
                Packs
              </a>
              <a className="a-footer" href="#help">
                Help
              </a>
              <a className="a-footer" href="#more">
                More
              </a>
              */}
            </div>
          </div>
          <div className="footer-top-right">
            <div className="footer-top-right-title">Legal Info</div>
            <div className="footer-top-right-subtitle">
              <a className="a-footer" href="#agreement">
                This landing page is a crated by Kevin Duhamel for you{" "}
                <FaHeart color="#FF0000" size={20} />
              </a>
              {/*
              <a className="a-footer" href="#privacy">
                Privacy policy
              </a>
              <a className="a-footer" href="#terms">
                Terms of use
              </a>
              <a className="a-footer" href="#trademarks">
                Trademarks
              </a>
              <a className="a-footer" href="#imprint">
                Imprint
              </a>
              <a className="a-footer" href="#contact">
                Contact us
              </a>
              */}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <button
                className="footer-bottom-left-input-button"
                onClick={() =>
                  (window.location.href = "mailto:kevinduhamelh@gmail.com")
                }
              >
                Contact Me
              </button>
            </div>
          </div>

          <div className="footer-bottom-right">
            <div className="footer-bottom-right-title">Follow Me</div>
            <div className="footer-bottom-right-subtitle">
              <a
                className="a-footer"
                href="https://www.facebook.com/kevinduhamelhayes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f">
                  <FaFacebook color="#435998" size={40} />
                </i>
              </a>
              {/*
              <a className="a-footer" href="#twitter">
                <i className="fab fa-twitter"><FaTwitter color="#49AAEA" size={40}/></i>
              </a>
        
              <a className="a-footer" href="#youtube">
                <i className="fab fa-youtube"> <FaYoutube color="#CA1C25" size={40}/></i>
              </a>
*/}
              <a
                className="a-footer"
                href="https://github.com/kevinduhamelhayes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram">
                  <FaGithub color="#9733F7" size={40} />
                </i>
              </a>
              <a
                className="a-footer"
                href="https://www.instagram.com/kevinduhamelhayes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram">
                  <FaInstagram color="#FF891E" size={40} />
                </i>
              </a>

              <a
                className="a-footer"
                href="https://www.linkedin.com/in/kevin-duhamel-hayes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin color="#0A66C2" size={40} />
              </a>
              {/*
              <a className="a-footer" href="#reddit">
                <i className="fab fa-reddit-alien"><FaReddit color="#FF4500" size={40}/></i>
              </a> 
              */}
              <a className="a-footer" href="#soundcloud">
                <i className="fab fa-soundcloud"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
