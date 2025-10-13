/* GIT - Desde la terminal
1ero - >git init

2ndo - >gh repo create nombre-del-repo --public/private

3ero - conectar la carpeta local
>cd /ruta/a/tu/proyecto
git init -inicializa el repo local
git add . -agrega todos los archivos
git commit -m "Mensaje de commit" -mensaje
git branch -M main
git remote add origin git@ithub.com:tu_usuario/nombre-del-repo.git -conecta al remoto
git push -u origin main -sube a github
*/

// Los Arrays son como una estanteria donde podemos
// colocar y gestionar el orden de los elementos.

// Los objetos son como fichas tecnicas o especificaciones de un artefacto.


const PC = ["MotherBoard","Ram","Silla","Disco Rigido","CPU","Escritorio",
  "Tarjeta WIFI","Fuente","Teclado","Monitor","Mouse Pad","Microfono",
  "Parlantes","Puertos"]
console.log(PC)

// Agregar uno o mas elementos al final - Mouse, GPU,
PC.push("Mouse", "GPU");
console.log("Agregamos " + PC + " al final de la lista.");

console.log(PC)

// Quitar algun elemento del final
const fuera = PC.pop(2);
console.log("Quitamos " + fuera + " del final de la lista.")

console.log(PC.length)
console.log(PC[14])

// Quitar mas de un elemento del final - igual para Quitar al principio o en cualquier lugar de la lista.
const eliminados = PC.splice(13, 14);
console.log("Quitamos ambos " + eliminados.join(", ") + " del final de la lista.")

// Agregar uno o mas elementos al principio
PC.unshift("Software", "Filtro de monitor")
console.log("Agregamos " + PC[0] + " y " + PC[1] + " al principio de la lista.")

// Quitamos un elemento al principio de la lista
const out = PC.shift()
console.log("Quitamos " + out + " del principio de la lista.")

// Entontrar alguna parte - Indica el indice donde se encuentra el elemento con el nombre
const encontrado = PC.indexOf("Parlantes")
console.log("El elemento se encuentra en la posicion: " + encontrado)

// Ordenar partes
// Por orden alfabetico?
PC.sort(); // Por defecto, ordena por alfabeto
console.log("En orden alfabetico: " + "\n" + PC.join(", " + "\n"))

// Inverso
PC.sort((a, b) => b.localeCompare(a));
console.log("En orden alfabetico inverso: " + "\n" + PC.join(", " + "\n"))

// Ordenar por cantidad de caracteres
const porNCaracteres = PC.sort((a, b) => a.length - b.length)
console.log("Ordenamos por cantidad de caracteres " + "\n" + porNCaracteres.join(", " + "\n"))


/* ================================================================================================= */

// Objetos




