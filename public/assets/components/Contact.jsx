import { useState } from "react";
import "../styles/contact.css";

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // alerta fake
    setStatus("success");

    // borrar alerta después de 3 segundos
    setTimeout(() => {
      setStatus("");
    }, 3000);

    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section">
      {status === "success" && (
        <div className="alert success">
          ¡Mensaje enviado correctamente!
        </div>
      )}

      <h2 className="contact-title">Contacto</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <label>Nombre</label>
        <input type="text" placeholder="Tu nombre" required />

        <label>Email</label>
        <input type="email" placeholder="Tu email" required />

        <label>Mensaje</label>
        <textarea placeholder="Tu mensaje" required />

        <div className="btns">
          <button type="submit">Enviar</button>
          <button type="reset" className="reset">Limpiar</button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
