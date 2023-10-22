import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ productos }) => {
  return (
    <div className="contenedorPadreItem">
      <img src={productos.img} alt={productos.nombre} />

      <div className="contenedorInformacionItem">
        <h4>{productos.nombre}</h4>
        <p> ARG ${productos.precio}</p>
        <p>
          ID Producto: <strong>{productos.id}</strong>
        </p>
        <p>{productos.categoria}</p>
        <Link to={`/item/${productos.id}`}> Ver Más </Link>
      </div>
    </div>
  );
};

export default Item;
