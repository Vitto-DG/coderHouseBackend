

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
    console.log(usuarioRecuperado.nomre); // Ana
*/

// Programa de aplicacion


function menu(){

  let opcion;
  do{
    opcion = parseInt(prompt("Inventario.\n" +
       "1 - Ingresar Producto\n" +
        "2 - Modificar Producto\n" +
         "3 - Borrar producto\n" +
          "4 - Mostrar Inventario\n" + "5 - Contacto/Mensaje\n" +
           "6 - Salir"
          ));

          switch (opcion){
            case 1:
              ingresarProducto();
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
              contacto();
              break;
            case 6:
              alert("Saliento del programa...");
              break;
            default:
              alert("Opcion inválida. Intente nuevamente.");
          }
  } while (opcion !== 6);
}

// Definimos la clase Producto

class Producto {
  constructor(marca, modelo, tipo){
    this.marca = marca;
    this.modelo = modelo;
    this.tipo = tipo;
    this.precio = this.precio;
  }
  describir(){
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Tipo: ${this.tipo}, Precio: $${this.precio}`;
  }
}

// Manejo del almacenamiento

let inventario = JSON.parse(localStorage.getItem("inventario")) || [];

agregar();
