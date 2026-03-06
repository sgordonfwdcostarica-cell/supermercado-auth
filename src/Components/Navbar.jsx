
import "../styles/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="cont-navbar">
      <div className="container navbar-inner">
        <Link to="/" className="titulo">
          <span className="logo-icon">🛍️</span> SuperFresh
        </Link>
        
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Busca frutas, verduras, lácteos..." readOnly />
        </div>

        <div className="cont-links">
          <Link className="user-login" to="/login">
            <span className="user-icon">👤</span> Login
          </Link>
          <div className="cart-icon-wrapper">
            <span className="cart-icon">🛒</span>
            <span className="cart-badge">2</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;