export const ItemDetail = ({ id, nombre, precio, img }) => {
  return (
    <div>
      <h2>{nombre}</h2>
      <h3>Precio: {precio}</h3>
      <h3>ID: {id}</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint culpa
        maxime nulla soluta cupiditate, magni dolores eos deleniti
        necessitatibus qui, voluptatum, ipsum animi! Pariatur delectus incidunt
        corrupti tempore laboriosam reprehenderit!
      </p>
      <img src={img} alt={nombre} />
    </div>
  );
};

export default ItemDetail;
