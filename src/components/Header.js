import Nav from "./Nav";
import logoImg from "../assets/icons/logo.svg";
import { Link } from "react-router-dom";

const title = "Little Lemon";

function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="flex-row m-flex-row space-between align-center gap-20">
          <Link to="/">
            <img src={logoImg} alt={title} width={148} height={40} />
          </Link>

          <Nav></Nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
