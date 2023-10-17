import { useState, useEffect } from "react";
import { getUnProducto } from "../asincmock";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailConteiner = () => {
  const [producto, setProducto] = useState(null);
  const { idItem } = useParams();

  useEffect(() => {
    getUnProducto(idItem).then((res) => setProducto(res));
  }, [idItem]);

  return (
    <div className="itemDetailConteiner">
      <ItemDetail {...producto} />
    </div>
  );
};

export default ItemDetailConteiner;
