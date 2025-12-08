import "../styles/cards.css";

export default function Cards() {
  const products = [
    { img: "/assets/bot.png", name: "BOTA ELVIS JAZZ URBANO NEGRO", price: "$100.000" },
    { img: "/assets/botastre.webp", name: "BOTAS STREET SOUL", price: "$120.000" },
    { img: "/assets/suecomarron.jpg", name: "SUECO BROWN TAP", price: "$100.000" },
    { img: "/assets/sansalia.png", name: "SANDALIA CATANIA TAP BIRK", price: "$80.000" },
    { img: "/assets/texana.webp", name: "TEXANA TREVI CUERO NEGRO", price: "$120.000" },
    { img: "/assets/tachas.jpg", name: "BLACK TAP", price: "$100.000" },
  ];

  return (
    <section id="cards" className="cards-section">
      <h2>Nuestros Favoritos</h2>

      <div className="cards-grid">
        {products.map((p, i) => (
          <div className="card" key={i}>
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p className="price">{p.price}</p>
            <button className="btn-buy">Comprar</button>
          </div>
        ))}
      </div>
    </section>
  );
}
