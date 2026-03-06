import FormRegistro from "../Components/FormRegistro";
import Navbar from "../Components/Navbar";
import "../styles/Register.css";

function Register() {
  return (
    <div className="home-wrapper">
      <Navbar />
      <div className="auth-page-content">
        <FormRegistro />
      </div>
      
      {/* Static Footer identical to Home */}
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

export default Register;