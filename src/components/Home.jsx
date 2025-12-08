import "../styles/home.css";

function Home() {
  return (
    <div className="app-container">
      <section id="home" className="home-container">
        <div className="home-text">
          <h1 className="home-title">Elegí tu estilo</h1>
          <p className="home-subtitle">
            Zapatos modernos, cómodos y pensados para acompañarte todos los días.
          </p>

          <a href="#cards" className="home-btn">Ver productos</a>
        </div>

        <div className="home-img">
          <img src="/assets/sansalia.png" alt="zapatos" />
        </div>
      </section>
    </div>
  );
}

export default Home;
