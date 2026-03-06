import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import "../styles/home.css";
import ListaProductos from "../Components/ListaProductos";

function Home() {
  return (
    <div className="home-wrapper">
      <Navbar/>
      
      {/* Hero Banner */}
      <section className="hero">
        <div className="hero-content">
          <h1>Tus compras del súper, frescas en tu puerta</h1>
          <p>Ahorra tiempo y dinero comprando desde casa. Envío gratis en tu primera orden.</p>
          <Link to="/login" className="btn-hero">Empezar a comprar</Link>
        </div>
      </section>

      <div className="container">
        {/* Fake Categories Section for Visual Parity */}
        <section className="categorias-static">
          <h2>Categorías Destacadas</h2>
          <div className="cat-grid">
             <div className="cat-item"><div className="cat-icon">🍓</div><span>Frutas</span></div>
             <div className="cat-item"><div className="cat-icon">🥦</div><span>Verduras</span></div>
             <div className="cat-item"><div className="cat-icon">🥩</div><span>Carnes</span></div>
             <div className="cat-item"><div className="cat-icon">🥛</div><span>Lácteos</span></div>
             <div className="cat-item"><div className="cat-icon">🥫</div><span>Despensa</span></div>
             <div className="cat-item"><div className="cat-icon">🥖</div><span>Panadería</span></div>
          </div>
        </section>

        {/* Real Product List */}
        <section className="productos-home">
          <ListaProductos isAdmin={false} />
        </section>
      </div>

      {/* Fake Info Section (full width container wrapper) */}
      <div className="container">
        <section className="info-static-wrapper">
          <h2>¿Cómo funciona SuperFresh?</h2>
          <div className="info-grid">
            <div className="info-card">
              <div className="icon">👆</div>
              <h3>1. Elige tus productos</h3>
              <p>Navega por nuestras categorías y añade lo que necesites a tu carrito.</p>
            </div>
            <div className="info-card">
              <div className="icon">💳</div>
              <h3>2. Paga seguro</h3>
              <p>Utiliza el método de pago que prefieras con total seguridad y rapidez.</p>
            </div>
            <div className="info-card">
              <div className="icon">🚚</div>
              <h3>3. Recibe en casa</h3>
              <p>Nuestros repartidores llevarán tu pedido a tu puerta en minutos.</p>
            </div>
          </div>
        </section>
      </div>

       {/* Static Footer */}
       <footer className="footer-static">
          <div className="container footer-content">
              <div className="footer-brand">
                  <h3>🛍️ SuperFresh</h3>
                  <p>Llevamos los productos más frescos del mercado directamente a tu cocina. Calidad y rapidez garantizada.</p>
                  <p style={{marginTop: '1rem'}}>📸 🐦</p>
              </div>
              <div className="footer-links">
                  <h4>Enlaces Rápidos</h4>
                  <p>Nosotros</p>
                  <p>Preguntas Frecuentes</p>
                  <p>Políticas de Envío</p>
                  <p>Sostenibilidad</p>
              </div>
              <div className="footer-links">
                  <h4>Contacto</h4>
                  <p>📞 +34 900 123 456</p>
                  <p>✉️ hola@superfresh.com</p>
                  <p>📍 Av. de la Frescura 123, Madrid, España</p>
              </div>
              <div className="footer-links">
                  <h4>Suscríbete a ofertas</h4>
                  <p>Recibe cupones y descuentos exclusivos cada semana.</p>
              </div>
          </div>
          <div className="container footer-bottom">
            <div>© 2024 SuperFresh Market. Todos los derechos reservados.</div>
            <div className="footer-bottom-links">
              <span>Privacidad</span>
              <span>Términos</span>
              <span>Cookies</span>
            </div>
          </div>
       </footer>
    </div>
  );
}

export default Home;

