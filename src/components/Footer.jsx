import "./styles/Footer.css"
import { FaLinkedin, FaReddit, FaYoutube, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-top-left">
            <div className="footer-top-left-title">
              <h1>Ableton</h1>
            </div>
            <div className="footer-top-left-subtitle">
              <a className="a-footer" href="#live">
                Live
              </a>
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
            </div>
          </div>
          <div className="footer-top-right">
            <div className="footer-top-right-title">Legal Info</div>
            <div className="footer-top-right-subtitle">
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
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <div className="footer-bottom-left-title">
              Subscribe to our newsletter
            </div>
            <div className="footer-bottom-left-subtitle">
              Enter your email address to stay up to date with the latest
              offers, tutorials, downloads, surveys and more.
            </div>
            <div className="footer-bottom-left-input">
              <input
                className="footer-bottom-left-input-text"
                type="text"
                placeholder="Enter your email address"
              />
              <button className="footer-bottom-left-input-button">
                Sign up
              </button>
            </div>
          </div>
          <div className="footer-bottom-right">
            <div className="footer-bottom-right-title">Follow Ableton</div>
            <div className="footer-bottom-right-subtitle">
              <a className="a-footer" href="#facebook">
                <i className="fab fa-facebook-f"><FaFacebook color="#435998" size={40}/></i>
              </a>
              <a className="a-footer" href="#twitter">
                <i className="fab fa-twitter"><FaTwitter color="#49AAEA" size={40}/></i>
              </a>
              <a className="a-footer" href="#youtube">
                <i className="fab fa-youtube"> <FaYoutube color="#CA1C25" size={40}/></i>
              </a>
              <a className="a-footer" href="#instagram">
                <i className="fab fa-instagram"><FaInstagram color="#FF891E" size={40}/></i>
              </a>
              <a className="a-footer" href="#linkedin">
                <FaLinkedin color="#0A66C2" size={40} />
              </a>
              <a className="a-footer" href="#reddit">
                <i className="fab fa-reddit-alien"><FaReddit color="#FF4500" size={40}/></i>
              </a>
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
