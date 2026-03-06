
import "../styles/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="cont-navbar">
      <h2 className="titulo">Supermercado</h2>
      <div className="cont-links">
      <Link className="links" to="/">Inicio</Link>
      <Link className="links" to="/login">Login</Link>
      <Link className="links" to="/register">Registro</Link>
      </div>
    </nav>
  );
}

export default Navbar;