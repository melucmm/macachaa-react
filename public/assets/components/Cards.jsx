import "../styles/cards.css";
import Card from "./Card";

export default function Cards() {
  const products = [
    {
      id: 1,
      title: "Sandalia Rosa",
      price: "$12.000",
      image: "/assets/sandaliarep.webp",
    },
    {
      id: 2,
      title: "Bota Negra",
      price: "$18.000",
      image: "/assets/bot.png",
    },
    {
      id: 3,
      title: "Texana",
      price: "$20.000",
      image: "/assets/texana.webp",
    },
  ];

  return (
    <section className="cards-section">
      <div className="cards-grid">
        {products.map((prod) => (
          <Card
            key={prod.id}
            title={prod.title}
            price={prod.price}
            image={prod.image}
          />
        ))}
      </div>
    </section>
  );
}
