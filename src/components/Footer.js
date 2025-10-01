import footerImg from "../assets/images/footer.png";

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
              <p className="footer-head">Navigtion</p>
              <ul className="footer-list">
                <li>
                  <a href="/" className="footer-item">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-item">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-item">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="/" className="footer-item">
                    Reservations
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-item">
                    Order Online
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-item">
                    Login
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-contact">
              <p className="footer-head">Contact</p>
              <ul className="footer-list">
                <li>
                  <a href="#" className="footer-item">
                    Address
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-item">
                    Phone Number
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-item">
                    Email
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-social">
              <p className="footer-head">Social Media</p>
              <ul className="footer-list">
                <li>
                  <a href="#" className="footer-item">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-item">
                    Instagram
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#" className="footer-item">
                    TikTok
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#" className="footer-item">
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
