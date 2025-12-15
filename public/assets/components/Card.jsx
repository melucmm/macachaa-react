import "../styles/card.css";

export default function Card({ image, title, price }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p className="price">{price}</p>
      <button
        className="btn-buy"
        onClick={() => alert("Producto agregado al carrito 🛒")}
      >
        Comprar
      </button>
    </div>
  );
}
