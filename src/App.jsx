import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cards from "./components/Cards";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  function App() {
  return (
    <div style={{ padding: 40, background: "pink" }}>
      <h1>SI VES ESTO, ERA CSS</h1>
    </div>
  );
}

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home
                title="Elegí tu estilo"
                description="Zapatos modernos, cómodos y pensados para acompañarte todos los días."
                image="/assets/sansalia.png"
              />
              <Cards />
              <Gallery />
              <Contact />
            </>
          }
        />

        <Route
          path="/producto/:nombre"
          element={<h2 style={{ padding: "40px" }}>Detalle del producto</h2>}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
