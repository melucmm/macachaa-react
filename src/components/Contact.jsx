import React from "react";
import { useLocalForm } from "../hooks/useLocalForm";
import '../styles/FormularioPuro.css';


function Contacto() {
  const { formData, handleChange, resetForm } = useLocalForm("formContactoDraft", {
    nombre: "",
    apellido: "",
    whatsapp: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Leer contactos previos
    let lista = [];
    try {
      const raw = localStorage.getItem("contactos");
      lista = raw ? JSON.parse(raw) : [];
    } catch {
      lista = [];
    }

    // Validación
    if (!formData.nombre || !formData.apellido || !formData.whatsapp || !formData.email) {
      alert("Complete todos los campos.");
      return;
    }

    // Contacto nuevo
    const nuevo = { ...formData, id: Date.now() };

    // Guardar
    const actualizado = [...lista, nuevo];
    localStorage.setItem("contactos", JSON.stringify(actualizado));

    alert("Contacto agregado correctamente ✔");

    resetForm();
  };

  return (
    <div id="index" className="bg-secondary">  
            <h3 className="space-grotesk-700">Contacto</h3>
          <div className="form-card">
        
        <form onSubmit={handleSubmit} >
          <center><label htmlFor=""> REGISTRATE PARA ENTERARTE LOS NUEVOS INGRESOS</label></center>
          <div className="mb-2">
            <label>Nombre</label>
            <input
              type="text"
              className="form-control form-control-sm"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
            />
          </div>

          <div className="mb-2">
            <label>Apellido</label>
            <input
              type="text"
              className="form-control form-control-sm"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              placeholder="Tu apellido"
              required
            />
          </div>

          <div className="mb-2">
            <label>Whatsapp</label>
            <input
              type="text"
              className="form-control form-control-sm"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder="+54261..."
              required
            />
          </div>

          <div className="mb-2">
            <label>Email</label>
            <input
              type="email"
              className="form-control form-control-sm"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="fridabj@gmail.com"
              required
            />
          </div>

          <div className="mt-3 d-flex justify-content-center gap-2">
            <button type="submit" className="btn btn-success btn-sm">Enviar</button>
            <button type="button" onClick={resetForm} className="btn btn-danger btn-sm">
              Reset
            </button>
          </div>
        </form>
      </div>
    
  </div>
  );
}

export default Contacto;

 