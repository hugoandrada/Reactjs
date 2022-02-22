import React from "react";
import '../../src/styles/components/pages/contactopage.css';

const ContactoPage = (props) => {
  return (
    <main className="holder">
      <div className="columna left">
        <h2>Contacto</h2>
        <form action="" className="formulario">
          <p>
            <label>Nombre</label>
            <input type="text" name="" />
          </p>
          <p>
            <label>Email</label>
            <input type="email" />
          </p>
          <p>
            <label>Telefono</label>
            <input type="text" />
          </p>
          <p>
            <label>Comentario</label>
            <textarea id="comentario"></textarea>
          </p>
          <p className="acciones">
            <input type="submit" value="Enviar" />
          </p>
        </form>
      </div>

      <div className="columna right">
        <h2>Otras vias de contacto</h2>
        <p>Tambien se pueden comunicar con nosotros...</p>
        <ul>
          <li>Telefono: 4344-332</li>
          <li>Email: contacto@email.com</li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Skype</li>
        </ul>
      </div>
    </main>
  );
};

export default ContactoPage;
