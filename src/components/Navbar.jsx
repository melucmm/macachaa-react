import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MACACHA</div>

      <ul className="nav-links">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#cards">Productos</a></li>
        <li><a href="#gallery">Galería</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
}
