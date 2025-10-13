// Las funcionenes son como ordenes o acciones.


/*
Crea un algoritmo utilizando funciones
Consigna.

Tomando como base la sintaxis para la creación de funciones crea al menos 3 de ellas donde se cumpla con un algoritmo de entrada de datos, procesamiento de la información y salida de los datos procesados.

Para introducir los datos puedes apoyarte de la función prompt() mientras que para la salida utilizarás de momento alert() o console.log()

Aspectos a incluir

Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, que incluya la definición de un algoritmo en JavaScript realizando las llamadas a las funciones en el orden correcto para procesamiento de la información y mostrar los resultados.

Sugerencias

Puedes usar funciones tradicionales así como arrow función o funciones anónimas según prefieras

Ejemplo

Crear una función que solicite los datos de entrada

Crear una función que procese la información obtenida.

Crear una función para mostrar el resultado final
*/

/* function saludar(nombre){

}

saludar(vitto); */

function sumar(){
  let numeroA = 15
  let numeroB = 30
  let resultado = numeroA + numeroB;

 /*  console.log(resultado) */
 return resultado
}

let calculo = sumar()
let conIVA = Math.floor(calculo * 1.21, (2, 0))
console.log(conIVA)

//Funcion Expresada




//Parametros

let primerNumero = parseInt(prompt("Ingresar primer numero"));
let segundoNumero = parseInt(prompt("Ingresa segundo numero"));

function sumar(numeroA, numeroB){
  let resultado = numeroA + numeroB
  console.log(resultado)
}

sumar("Resultado de suma: " + primerNumero, segundoNumero);

//Funciones Flecha
//antigua
const calculadoraDel10 = function(numeroA){
  console.log(numeroA*10)
}
calculadoraDel10(5)

//moderna
const calculadoraDel20 = numeroA => {
  console.log(numeroA*20)
}
calculadoraDel20(40);

//Si usamos un solo parametro, nohacen falta los ()
// Si la accion es una sola linea, no usamos las {} por que la flecha tiene
// un return implicito

const multiplicar = (numeroA,numeroB) => numeroA*numeroB
console.log(multiplicar(8,7));
