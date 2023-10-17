import "./ItemListConteiner.css";
import { useState, useEffect } from "react";
import { getProducto, getProductosPorCategoria } from "../asincmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ greetings }) => {
  const [MisProducto, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {
    const funcion = idCategoria ? getProductosPorCategoria : getProducto;

    funcion(idCategoria).then((res) => setProductos(res));
  }, [idCategoria]);

  return (
    <>
      <div>
        <h1 className="greetings">{greetings}</h1>
      </div>
      <div className="contenedorList">
        <ItemList productos={MisProducto} />
      </div>
    </>
  );
};
