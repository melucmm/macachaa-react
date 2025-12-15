import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        © 2025 Macacha Shoes — Todos los derechos reservados
      </p>

      <div className="social-links">
        <a
          href="https://www.instagram.com/macacha.bs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>

        <a
          href="https://wa.me/541163700723"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>

        <a
          href="https://www.facebook.com/macacha"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
      </div>
    </footer>
  );
}
