import React from "react";
import '../../src/styles/components/pages/homepage.css'

const HomePage = (props) => {
  return (
    <main className="holder">
      <div className="homeimg">
        <img src="../images/home/img01.jpg" alt="avion" />
      </div>
      <div className="columnas">
        <div className="bienvenidos left">
          <h2>Bienvenidos</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            aliquid quia, saepe maiores odit repellat tempore unde facilis
            magnam sint eos in expedita placeat impedit ut culpa architecto
            minima sit!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            aliquid quia, saepe maiores odit repellat tempore unde facilis
            magnam sint eos in expedita placeat impedit ut culpa architecto
            minima sit!
          </p>
        </div>
        <div className="testimonios right">
          <h2>testimonios</h2>
          <div className="testimonio">
            <span className="cita">Simplemente excelente</span>
            <span className="autor">Juan Perez - juanperez.com</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
