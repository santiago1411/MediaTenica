import React from "react";
import logos from "../imagenes/logos.png";
import { Link } from "react-router-dom";
import { PiCopyrightBold } from "react-icons/pi"

function Piedepagina () {
  return (
    <div className="container-fluid">
      <div className="row mx-auto">
        <div className="text-center pt-5 mx-auto">
          <h2 className="encabezado">Trabaja en la Salle</h2>
          <img src={logos} alt="pdp" width="100"/>
          <h5 className="encabezado px-5">¿Eres docente?. Trabaja con nosotros y prepara a los estudiantes en habilidades de alta demanda</h5>
          <p className="px-3"><small>The irony of the situation hadn't escaped her. She had taken years to sculpt the perfect persona with the perfect.</small></p>
          <section>
            <button className="btn btn-success">Instalar La Salle</button>
          </section>
          <div id="copyright">
            <hr/>
            <p><small>La Salle <PiCopyrightBold/> Todos los derechos reservados.</small></p>
          </div >
        </div>
      </div>
    </div>
  );
}

export default Piedepagina;