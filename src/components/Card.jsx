import "../styles/card.css";
import { Link } from "react-router-dom";

export default function Card({ image, title, price }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p className="price">{price}</p>

      <Link to={`/producto/${title}`} className="btn-buy">
        Ver producto
      </Link>
    </div>
  );
}
