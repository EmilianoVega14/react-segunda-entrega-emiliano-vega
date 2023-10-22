export const misProductos = [
  {
    id: "1",
    nombre: "PICADOR DE MADERA",
    precio: "500",
    img: "../imagenes/verde-1.jpg",
    detalle:
      "Este es un detalle del producto, que se visualizara cuando pidamos detalle del producto",
    categoria: "picadores",
  },
  {
    id: "2",
    nombre: "PICADOR DE METAL",
    precio: "700",
    img: "../imagenes/verde-2.jpg",
    detalle:
      "Este es un detalle del producto, que se visualizara cuando pidamos detalle del producto",
    categoria: "picadores",
  },
  {
    id: "3",
    nombre: "PICADOR CHINOCAPU",
    precio: "100",
    img: "../imagenes/verde-3.jpg",
    detalle:
      "Este es un detalle del producto, que se visualizara cuando pidamos detalle del producto",
    categoria: "picadores",
  },
  {
    id: "4",
    nombre: "PICADOR EL FUMON ",
    precio: "200",
    img: "../imagenes/musgo-2.jpg",
    detalle:
      "Este es un detalle del producto, que se visualizara cuando pidamos detalle del producto",
    categoria: "picadores",
  },
  {
    id: "5",
    nombre: "TABACO ARGENTINO",
    precio: "800",
    img: "../imagenes/musgo-1.jpg",
    detalle:
      "Este es un detalle del producto, que se visualizara cuando pidamos detalle del producto",
    categoria: "picadores",
  },
  {
    id: "6",
    nombre: "TABACO CUBANO",
    precio: "1000",
    img: "../imagenes/verde-4.jpg",
    detalle:
      "Este es un detalle del producto, que se visualizara cuando pidamos detalle del producto",
    categoria: "picadores",
  },
  {
    id: "7",
    nombre: "PICADOR EL CHINO",
    precio: "400",
    img: "../imagenes/verde-1.jpg",
    detalle:
      "Este es un detalle del producto, que se visualizara cuando pidamos detalle del producto",
    categoria: "sedas",
  },
  {
    id: "8",
    nombre: "PICADOR TU PIKA",
    precio: "700",
    img: "../imagenes/verde-2.jpg",
    detalle:
      "Este es un detalle del producto, que se visualizara cuando pidamos detalle del producto",
    categoria: "sedas",
  },
  {
    id: "9",
    nombre: "SEDA OCB GOLD",
    precio: "100",
    img: "../imagenes/verde-2.jpg",
    detalle:
      "Este es un detalle del producto, que se visualizara cuando pidamos detalle del producto",
    categoria: "sedas",
  },
  {
    id: "10",
    nombre: "SEDA LA PEPITA",
    precio: "200",
    img: "../imagenes/musgo-1.jpg",
    detalle:
      "Este es un detalle del producto, que se visualizara cuando pidamos detalle del producto",
    categoria: "sedas",
  },
  {
    id: "11",
    nombre: " DON PAPEL",
    precio: "800",
    img: "../imagenes/verde-2.jpg",
    detalle:
      "Este es un detalle del producto, que se visualizara cuando pidamos detalle del producto",
    categoria: "sedas",
  },
  {
    id: "12",
    nombre: "SEDA HOJA DE BIBLIA",
    precio: "1000",
    img: "../imagenes/verde-1.jpg",
    detalle:
      "Este es un detalle del producto, que se visualizara cuando pidamos detalle del producto",
    categoria: "sedas",
  },
  {
    id: "13",
    nombre: "TABACO NO FUMES MAS",
    precio: "500",
    img: "../imagenes/verde-2.jpg",
    detalle:
      "Este es un detalle del producto, que se visualizara cuando pidamos detalle del producto",
    categoria: "tabacos",
  },
  {
    id: "14",
    nombre: "TABACO GOLDEN",
    precio: "700",
    img: "../imagenes/verde-1.jpg",
    detalle:
      "Este es un detalle del producto, que se visualizara cuando pidamos detalle del producto",
    categoria: "tabacos",
  },
  {
    id: "15",
    nombre: "TABACO HENRY",
    precio: "100",
    img: "../imagenes/verde-3.jpg",
    detalle:
      "Este es un detalle del producto, que se visualizara cuando pidamos detalle del producto",
    categoria: "tabacos",
  },
  {
    id: "16",
    nombre: "TABACO SAHIRY",
    precio: "200",
    img: "../imagenes/verde-3.jpg",
    detalle:
      "Este es un detalle del producto, que se visualizara cuando pidamos detalle del producto",
    categoria: "tabados",
  },
  {
    id: "17",
    nombre: "TABACO SAN MARTIN",
    precio: "800",
    img: "../imagenes/verde-3.jpg",
    detalle:
      "Este es un detalle del producto, que se visualizara cuando pidamos detalle del producto",
    categoria: "tabacos",
  },
  {
    id: "18",
    nombre: "TABACO GANA MILEI?",
    precio: "1000",
    img: "../imagenes/verde-4.jpg",
    detalle:
      "Este es un detalle del producto, que se visualizara cuando pidamos detalle del producto",
    categoria: "tabacos",
  },
];

// CREAMOS UNA FUNCION PROMESA QUE ME DEVUELVA TODOS LOS DATOS DEL ARRAY

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(misProductos);
    }, 1000);
  });
};

// AHORA NECESITO DESARROLLAR UNA FUNCION QUE SOLAMENTE ME DEVUELVA SOLAMENTE UN SOLO PRODUCTO DE ACUERDO AL ID QUE TENGA.

export const getUnProductoPorId = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const item = misProductos.find((elemento) => elemento.id === id);

      if (item) {
        resolve(item);
      } else {
        reject("Producto no encontrado");
      }
    }, 1000);
  });
};
