import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section">
          <h3>MACACHA</h3>
          <p>Hecho con ♥ desde Zona Sur.</p>
        </div>

        <div className="footer-section">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#cards">Productos</a></li>
            <li><a href="#gallery">Galería</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Facebook:Macacha</p>
          <p>Instagram: @macacha.bs</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Macacha Shoes — Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
