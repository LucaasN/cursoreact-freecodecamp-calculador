import React from "react";
import '../styles/Boton.css'

function Boton({ children, manejarClick }) {

  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  return (
    <button
      className={`boton-contenedor ${esOperador(children) ? "operador" : ""}`}
      onClick={ () => manejarClick(children) }
    >
      {children}
    </button>
  );
}

export default Boton;
