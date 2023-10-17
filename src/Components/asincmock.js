export const misProductos = [
  {
    id: "1",
    nombre: "picador",
    precio: 200,
    img: "./imagenes/picador.jpg",
    idCat: "1",
  },
  {
    id: "2",
    nombre: "seda ocb black",
    precio: 150,
    img: "./imagenes/sedaocbblack.jpg",
    idCat: "1",
  },
  {
    id: "3",
    nombre: "sustrato la black",
    precio: 300,
    img: "./imagenes/sustratolablack.jpg",
    idCat: "2",
  },
  {
    id: "4",
    nombre: "tabaco sayri",
    precio: 300,
    img: "./imagenes/tabacosayri.jpg",
    idCat: "2",
  },
  {
    id: "4",
    nombre: "tabaco sayri",
    precio: 300,
    img: "./imagenes/tabacosayri.jpg",
    idCat: "3",
  },
  {
    id: "4",
    nombre: "tabaco sayri",
    precio: 300,
    img: "./imagenes/tabacosayri.jpg",
    idCat: "3",
  },
];

// ESTA FUNCION ME DEVUELVE TODOS LOS PRODUCTOS

export const getProducto = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(misProductos);
    }, 100);
  });
};
export default getProducto;

// ESTA FUNCION ME DEVUELVE 1 PRODUCTO DE ACUERDO AL ID

export const getUnProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = misProductos.find((prod) => prod.id === id);
      resolve(producto);
    }, 100);
  });
};

// ESTA FUNCION ME DEVUELVE LOS PRODUCTOS DE ACUERDO SU CATEGORIA

export const getProductosPorCategoria = (idCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosCategoria = misProductos.filter(
        (prod) => prod.idCat === idCategoria
      );
      resolve(productosCategoria);
    }, 100);
  });
};
