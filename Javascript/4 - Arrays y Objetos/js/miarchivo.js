/* GIT - Desde la terminal
1ero - >git init

2ndo - >gh repo create nombre-del-repo --public/private

3ero - conectar la carpeta local
>cd /ruta/a/tu/proyecto
git init -inicializa el repo local
git add . -agrega todos los archivos
git commit -m "Mensaje de commit" -mensaje
  ls -al ~/.ssh -ver si tenemos clave
  ssh-keygen -t ed25519 -C "tu_email@ejemplo.com" -genera una calve nueva
  ssh -T git@github.com -probar la conexion. You've successfully authenticated ? conexion lista
  eval "$(ssh-agent -s)" -activar al agente SSH
  ssh-add ~/.ssh/id_ed25519.pub -ver mi clave publica. Copiar todo el texto que aparece
  Enter, Enter, Enter.
  eval "$(ssh-agent -s)" -Inicia el agente
  ssh-add ~/.ssh/id_ed25519 -Agrega la clave

git branch -M main
git remote add origin git@ithub.com:tu_usuario/nombre-del-repo.git -conecta al remoto
git push -u origin main -sube a github

The authenticity of host 'github.com (4.228.31.150)' can't be established.
ED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.
This key is not known by any other names.

The key fingerprint is:
SHA256:V6ATPVswakZa447tHkGJga9jLf24Wc2MxTi+heeMZkk vittodegiusto@gmail.com
The key's randomart image is:
+--[ED25519 256]--+
|     .. =.+.     |
|    .  B *oo.    |
|     .o X  +.    |
|      .B +..     |
|     +. S +      |
|    = ooE@       |
|   . o +B.*      |
|      .+=O       |
|      o++ o      |
+----[SHA256]-----+

*/

// Los Arrays son como una estanteria donde podemos
// colocar y gestionar el orden de los elementos.


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

// Los objetos son como fichas tecnicas o especificaciones de un artefacto.

const PCspecs = {
  Tipo: "Escritorio",
  Mother_Board: "Gigabyte Amd A520m K V2 Ddr4 Gamer",
  CPU: "",
  GPU: "",
  RAM: "",
  Almacenamiento: "",
  Ports: null,
  Perifericos: {
    Mouse: "",
    Teclado: "",
    Monitor: "",
    Parlantes: "",
    Gafas_VR: "",
    Auriculares: "",
    Microfono: "",
  },
  Adaptador_WiFi: "",

}

console.log("Este es el objeto: PCspecs (en orden nativo)", PCspecs)
/* En la consola aparecen primero en orden de insercion y luego en alfabetico. */

console.log("Este es el objeto: PCspecs (en orden de insercion, aparentemente solo las claves)", Object.keys(PCspecs))



// Agregar valores a las claves/propiedades del objeto - Cambios rapidos
PCspecs.CPU = "AMD Ryzen 5 4500 6/12 4.1GHz Zen3 AM4";


/*  Para agregar valores a varias propiedades, se puede usar:
  1 el metodo Object.assign(objeto, {});
    2 el operador spread (...) No modifica el original, crea un objeto nuevo.
const PCactualizada = {
  ...PCspecs,
  cliente: "Tito",
  direccion: "",
  nro_de_orden: 1234
  };
 */

// Agregar una propiedad al objeto
PCspecs.Mobiliario = {
  Escritorio: "Simple",
  Lampara: "Brazo flexible giratorio",
  Silla: "Gammer",
  Mesa_extra: "Ratona",
}
console.log("Se agregró la propiedad Mobiliario con ", PCspecs.Mobiliario, " al objeto.")

// Modificar el valor de una propiedad del objeto
PCspecs.Almacenamiento = "HDD 500gb 3.5 Wd Seagate Toshiba";
console.log("Se agregó un valor a Almacenamiento:", PCspecs.Almacenamiento)

PCspecs.Almacenamiento = "SSD Bx500 Crucial";
console.log("Se modificó el valor a Almacenamiento:", PCspecs.Almacenamiento)

// Quitar una propiedad del objeto
delete PCspecs.Mobiliario.Mesa_extra;
console.log("Se eliminó 'Mesa_extra' del objeto.", PCspecs.Mobiliario)
