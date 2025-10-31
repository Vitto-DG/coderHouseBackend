/*
                    Consigna

metodos:
        .find()
        .filter()
        .forEach()
        .map()
*/



const productos = [
  {
    id: 1,
    nombre: "Guitarra Electrica Stratocaste",
    precio: 1200,
    origen: "USA",
    stock: 5,
    color: "Rojo, Verde, Azul, Celeste, Rosa, Fluor, Transparente",
    marca: "Fender",
    tipo: "Instrumentos"
  },
  {
    id: 2,
    nombre: "Sintetizador",
    precio: 400,
    origen: "Japon",
    stock: 6,
    color: "Negro",
    marca: "Roland",
    tipo: "Instrumentos"
  },
  {
    id: 3,
    nombre: "Bajo Electrico 5 Cuerdas",
    precio: 250,
    origen: "Korea",
    stock: 4,
    color: "Aqua vintage, Naranja, Amarillo, Negro, Rojo",
    marca: "Ibanez",
    tipo: "Instrumentos"
  },
  {
    id: 4,
    nombre: "Guitarra Electrica Les Paul",
    precio: 1700,
    origen: "Mexico",
    stock: 4,
    color: "Sandbrust, Vino, Negro, Dorado, Violeta",
    marca: "Gibson",
    tipo: "Instrumentos"
  },
  {
    id: 5,
    nombre: "Bateria Acustica",
    precio: 3000,
    origen: "China",
    stock: 3,
    color: "Verde, Azul, Rojo, Negro, Blanco",
    marca: "Tama",
    tipo: "Instrumentos"
  },
  {
    id: 6,
    nombre: "Violin Stentor",
    precio: 700,
    origen: "Reino Unido",
    stock: 3,
    color: "Madera",
    marca: "Stentor",
    tipo: "Instrumentos"
  },
  {
    id: 7,
    nombre: "Cable TRS",
    precio: 20,
    origen: "China",
    stock: 50,
    color: "Negro, Rojo, Azul, Amarillo, Naranja",
    marca: "Hall",
    tipo: "Accesorios"
  },
  {
    id: 8,
    nombre: "Funda de guitarra",
    precio: 80,
    origen: "China",
    stock: 20,
    color: "Negra, Crema, Azul, Gris, Bordó",
    marca: "Gator",
    tipo: "Accesorios"
  },
  {
    id: 9,
    nombre: "Soporte de Teclado",
    precio: 100,
    origen: "China",
    stock: 10,
    color: "Negro, Azul, Plateado, Gris, Rojo, Blanco",
    marca: "Hercules",
    tipo: "Accesorios"
  },
]

let carrito = [];
let listaDeseos = [];


// Creamos un menu

/*
Menu Principal
      1 - Buscar
              Nombre, Marca
                #Filtrar por tipo, origen, precio, color
                    Agregar al carrito
                    Quitar filtro
            Volver al menu principal
      2 - Ver Carrito (muestra un prompt con una lista)
            Escriba P para "Pagar"
            Escriba Q + el numero de item para quitar item
            Escriba + "un numero" para agregar mas cantidades de un item.
            Escriba MP para "Menu Principal"
      3 - Contacto
      4 - Salir
*/



let opcion

while (opcion !== 5) {
  opcion = prompt(
    "Tienda de instrumentos" +
    "1 - Buscar" +
    "2 - Ver Carrito" +
    "3 - Lista de deseos" +
    "4 - Contacto" +
    "5 - Salir"
  );

  switch (opcion){
    case 1: menuBuscar();
            break;
    case 2: menuCarrito();
            break;
    case 3: verListaDeseos();
            break;
    case 4: prompt("Contacto: contacto@tiendamusical.com\n o dejar mensaje:");
            break;
    case 5: alert("Gracias por visitarnos.");
            break;
    default: alert("No ha seleccionado ninguna opcion.")
  }
}

function buscar(){
  productos.find(producto => producto.nombre())

}

console.log(buscar())
