import React from "react";
import { Link } from "react-router-dom";
import portada from "../imagenes/portada.png";


function Init() {
  return (
    <div className="container">
      
      <div className="row">
        
        <img src={portada} alt="logo" className="mx-auto" style={{ maxWidth: "500px" }}/>

      </div>
    </div>
  );

}
        
export default Init;