import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Cards from "./components/Cards.jsx";
import Gallery from "./components/Gallery.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />

      <section id="home" style={{ background: "#ffdede", padding: "50px" }}>
        <Home
          title="Elegí tu estilo"
          description="Zapatos modernos, cómodos y pensados para acompañarte todos los días."
          image="/assets/sansalia.png"
        />
      </section>

      <section id="cards" style={{ background: "#deffde", padding: "50px" }}>
        <Cards />
      </section>

      <section id="gallery" style={{ background: "#dedeff", padding: "50px" }}>
        <Gallery />
      </section>

      <section id="contact" style={{ background: "#ffffde", padding: "50px" }}>
        <Contact />
      </section>

     <Footer />

    </div>
  );
}

export default App;

