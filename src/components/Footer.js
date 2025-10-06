import footerImg from "../assets/images/footer.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-row flex-row space-between gap-20">
          <div className="footer-image">
            <img src={footerImg} alt="little lemon" />
          </div>
          <div className="footer-content flex-row space-between gap-20">
            <div className="footer-nav">
              <p className="footer-head">Navigation</p>
              <ul className="footer-list">
                <li>
                  <Link to="/" className="footer-item">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="footer-item">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/comming-soon" className="footer-item">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link to="/booking" className="footer-item">
                    Reservations
                  </Link>
                </li>
                <li>
                  <Link to="/comming-soon" className="footer-item">
                    Order Online
                  </Link>
                </li>
                <li>
                  <Link to="/comming-soon" className="footer-item">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-contact">
              <p className="footer-head">Contact</p>
              <ul className="footer-list">
                <li className="footer-item">123 Lemon St, Chicago, IL</li>
                <li>
                  <a href="tel:+11234567890" className="footer-item">
                    (123) 456-7890
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contact@littlelemon.com"
                    className="footer-item"
                  >
                    contact@littlelemon.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-social">
              <p className="footer-head">Social Media</p>
              <ul className="footer-list">
                <li>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-item"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-item"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-item"
                  >
                    TikTok
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-item"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
