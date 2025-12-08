import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Cards from "./components/Cards.jsx";
import Gallery from "./components/Gallery.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Home />
      <Cards />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;