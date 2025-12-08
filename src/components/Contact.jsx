import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Formulario enviado:", form);
  }

  function handleReset() {
    setForm({ nombre: "", email: "", mensaje: "" });
  }

  return (
    <section id="contact">
      <h2>Contacto</h2>

      <form onSubmit={handleSubmit} onReset={handleReset}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <textarea
          name="mensaje"
          placeholder="Mensaje"
          value={form.mensaje}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Enviar</button>
        <button type="reset">Reset</button>
      </form>
    </section>
  );
}

export default Contact;


