

// Funciones constructoras (plantilla para objetos. Lo que seria una clase)

/* function Teclado(marca, modelo, tipo){
  this.marca = marca;
  this.modelo = modelo;
  this.tipo = tipo;
  this.describir = function(){
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Tipo: ${this.tipo}`;
  };
}
 */
// Para crear un nuevo objeto Teclado
//var teclado1 = new Teclado("Roland", "Fantom08", "Workstation");

//console.log(teclado1.describir());

// Teclado, es una funcion constructora. No es una clase, pero hace las veces de una.
// las propiedades: Marca, Modelo y Tipo; se asignan al objeto que 'this' referencia dentro de la funcion constructora.

// new Teclado, crea una nueva instancia de Teclado y 'this', en el contexto de la funcion constructora; se refiere a esta nueva instancia.


// Clase propiamente dicha. Funcionalidad disponible a partir de 2015 con ES6

/* class Teclado {
  constructor(marca, modelo, tipo){
    this.marca = marca;
    this.modelo = modelo;
    this.tipo = tipo;
    this.precio = this.precio;
  }
  describir(){
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Tipo: ${this.tipo}, Precio: $${this.precio}`;
  }
} */

// Para crear un objeto, es igual que en el ejemplo anterior:
/* const teclado1 = new Teclado("Yamaha", "Motif", "workstation");
console.log(teclado1.describir()); */

// Facilitan la herencia y el polimorfismo.

/* const productos = [];

function agregar(){
  let marcaTeclado = prompt("Ingresa el modelo del teclado");
  let modeloTeclado = prompt("Ingresa el modelo del teclado");
  let tipoTeclado = prompt("Ingresa el modelo del teclado");

  const teclado = new Teclado(marcaTeclado, modeloTeclado, tipoTeclado)
  productos.push(teclado)
  console.log(productos)

} */
// aqui arriba, la funcion solo aparece una vez. Seria mejor desarrollar un menu que siempre este disponible cada vez que terminamos una operacion y nos permita decidir si seguir agregando, si mostrar el inventario o si abandonar el programa.


// ===============================================================================

// LocalStorage: Guardar

/*
  Para poder almacenar datos de manera local en el navegador del usuario, tenemos metodos y protocolos de almacenamiento web.
  Basicamente son localStorage y sessionStorage.

  El primero permite almacenar datos de forma indefinida hasta que sean explicitamente eliminados por el usuario o por el sitio web que los guardo.
  Osea que aun que cerremos el navegador y reiniciemos el sistema, persisten.
  Ideal para tokens, prefs de usuario, datos de autocompletado para visitas futuras.

  ej LocalStore:
    guardar:
      localStorage.setItem('usuario', 'JuanPerez); // clave, valor

    obtener
      let usuario = localStorage.getItem('usuario');
      console.log(usuario); // 'JuanPerez'

    eliminar
      localStorage.removeItem('usuario');



  El otro no resiste el cierre de la pestaña del navegador.
  Ideal para datos de formulario en progreso de compra, configuraciones temporales de visualizacion, datos sensibles como transacciones financieras.


  ej SessionStore:
    guardar
      sessionStorage.setItem('detalleCompra');

    obtener
      let detalle = sessionStorage.getItem('detalleCompra');
      console.log(detalle); // 'libro de JavaScript'

    eliminar
      sessionStorage.removeItem('detalleCompra');


// Tipos de datos a guardar:

LocalStore:

    por defecto, guarda en formato de cadena de texto o string. Por eso es que para recuperar valores numericos que hayamos guardado, necesitamos volver a convertirlos con parseInt por ejemplo.

    localStorage.setItem('puntuacion', '10');

    let puntuacion = parseInt(localStorage.getItem('puntuacion'));
    console.log(puntuacion); // 10



  Guardar Objetos o Arrays

    debemos convertirlos a una cadena JSON con .stringify(). Y para recuperarlo,
    con .parse(localStore.getItem()).

    let usuario = {
    nombre: "Ana",
    edad: 25
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));


    let usuarioRecuperado = JSON.parse(localStorage.getItem('usuario'));
    console.log(usuarioRecuperado.nomre); // Ana/Vitto

  // Borrar datos = .removeItem()

    Para datos puntuales y especificos.

  localStorage.removeItem('clave');
  sessionStorage.removeItem('clave');

    Para borrar todos los datos - .clear()

  localStorage.clear();
  sessionStorage.clear();







*/

// Programa de aplicacion


function menu(){

  let opcion;
  do{
    opcion = parseInt(prompt("Inventario.\n" +
       "1 - Agregar Producto\n" +
        "2 - Modificar Producto\n" +
         "3 - Borrar producto\n" +
          "4 - Mostrar Inventario\n" +
           "5 - Ver Bitacora\n" +
            "6 - Agregar a Bitacora\n" +
              "7 - Salir"
          ));

          switch (opcion){
            case 1:
              agregarProducto();
              break;
            case 2:
              modificarProducto();
              break;
            case 3:
              borrarProducto();
              break;
            case 4:
              mostrarInventario();
              break;
            case 5:
              verBitacora();
              break;
            case 6:
              nuevaBitacora();
              break;
            case 7:
              alert("Saliento del programa...");
              break;
            default:
              alert("Opcion inválida. Intente nuevamente.");
          }
  } while (opcion !== 7);
}


// Definimos la clase Producto
class Producto {
  static id = 0;
  constructor(marca, modelo, tipo, precio, cantidad){
    this.id = ++Producto.id;
    this.marca = marca;
    this.modelo = modelo;
    this.tipo = tipo;
    this.precio = precio;
    this.cantidad = cantidad;
  }
  describir(){
    return "ID: " + this.id + "\nMarca: " + this.marca + "\nModelo: " + this.modelo + "\nTipo: " + this.tipo + "\nPrecio: $" + this.precio + "\nCantidad: " + this.cantidad;
  }
}


// Manejo del almacenamiento
// array global sincronizado con localStorage
let inventarioData = JSON.parse(localStorage.getItem("inventario")) || [];
let inventario = inventarioData.map(p => new Producto(p.marca, p.modelo, p.tipo, p.precio, p.cantidad));

// Para que

// actualizar en cada edicion
function refreshInventario(){
  localStorage.setItem("inventario", JSON.stringify(inventario));
}

// Agregar producto
function agregarProducto(){
  const marca = prompt("Ingresar la marca del producto:");
  const modelo = prompt("Ingresar el modelo:");
  const tipo = prompt("Ingresar el tipo:");
  const precio = parseFloat(prompt("Ingresar precio:"));
  const cantidad = parseInt(prompt("Ingresar cantidad:"));

  const nuevoProducto = new Producto(marca, modelo, tipo, precio, cantidad);
  inventario.push(nuevoProducto);
  refreshInventario();
  alert("Producto agregado exitosamente.");
  console.log()
}

// Modificar producto
function modificarProducto(){
  mostrarInventario();
  const id = parseInt(prompt("Ingrese el id:"));

  const producto = inventario.find(p => p.id === id);

  if(producto) {
    producto.marca = prompt("Nueva marca: ", producto.marca);
    producto.modelo = prompt("Nueva modelo: ", producto.modelo);
    producto.tipo = prompt("Nueva tipo: ", producto.tipo);
    producto.precio = parseFloat(prompt("Nueva precio: ", producto.precio));
    producto.cantidad = parseInt(prompt("Nueva cantidad: ", producto.cantidad));
    refreshInventario();
    alert("Producto actualizado con exito.");
  } else {
    alert("No existe un producto con ese ID.")
  }
}

// Borrar producto
function borrarProducto(){
  mostrarInventario();
  const id = parseInt(prompt("ingrese ID del producto a borrar:"));

  const indice = inventario.findIndex(p => p.id === id);

  if (indice !== -1){
    inventario.splice(indice, 1);
    refreshInventario();
    alert("Producto eliminado con exito.")
  } else {
    alert("No existe un producto con ese ID.")
  }
}

// Mostrar inventario
function mostrarInventario(){
  if(inventario.length === 0){
    alert("No hay productos.")
  } else {
    let lista = "Inventario:\n\n";
    for (const producto of inventario) {
      lista += producto.describir() + "\n===================\n";
    }
    alert(lista);
  }
}

// Bitacora

let bitacora = JSON.parse(localStorage.getItem("bitacora")) || [];

function guardarBitacora(){
  localStorage.setItem("bitacora", JSON.stringify(bitacora));
}

function verBitacora(){
  if(bitacora.length === 0){
    alert("No hay mensajes.");
  } else {
    let lista = "Bitacora del deposito:\n\n";
    for (const mensaje of bitacora){
      lista += "+ " + mensaje + "\n"
    }
    alert(lista);
  }
}

function nuevaBitacora(){
  const texto = prompt("Ingresar mensaje o nota:");

  if(texto && texto.trim() !== ""){
    const fecha = new Date().toLocaleDateString("es-AR");
    bitacora.push(fecha + " - " + texto);
    guardarBitacora();
    alert("Mensaje agregado.");
  } else {
    alert("Mensaje vacío. No se agregó nada.");
  }
}

// Para limpiar todos los mensajes.
function limpiarBitacora(){
  const confirmar = confirm("Desea borrar todos los mensajes de la bitacoera?");
  if(confirmar){
    bitacora = [];
    guardarBitacora();
    alert("Bitacora vaciada.")
  }
}

menu();
