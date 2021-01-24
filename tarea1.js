/* 1. Escribir una función a la que se pasa como parámetro
* un número entero y devuelve como resultado un texto que
* indica si el número es par o impar.
* Mostrar por pantalla el resultado devuelto por la función.
*/

function tipoEntero(numero) {
    //Validar que el argumento enviado sea un número entero
    if(!Number.isInteger(numero)){
      console.log("Entrada inválida");
    } else {
      var analizaNumero = numero%2;

      if(analizaNumero > 0) {
        console.log("El número " + numero + " es impar");
      } else if(analizaNumero === 0) {
        console.log("El número " + numero + " es par");
      }
    }

  return null;
}

//un valor inicial
var num = 4;

//Un amable mensaje para correrlo desde la consola
console.log("1: La función tiene la firma `tipoEntero(num)`");
console.log("Por ejemplo, tipoEntero(4), imprime en la consola: ")

tipoEntero(num);

/********************************************************************** */

/*2. Según este string `"abcdefghijklmnñopqrstuvwxyz"`,
* hacer una función que recibe un parámetro (un caracter o una letra),
* y la función me debe devolver en qué posición
* en la cadena del string se encuentra el caracter entregado como argumento.
* Para realizar esto deben buscar en el prototipo `String`.
*/

function regresaPosicion(caracter) {

  var cadena = "abcdefghijklmnñopqrstuvwxyz";
  var pos = cadena.indexOf(caracter);

  if(pos >= 0) {
    console.log("Posición de '" + caracter + "': " + pos)
  } else {
    console.log("El caracter '" + caracter + "' no se encuentra en la cadena.")
  }

  return null;
}

//Un amable mensaje para correrlo desde la consola
console.log("2: Por ejemplo, si miCaracter= 'd', regresaPosicion(miCaracter), imprime en la consola: ")

var miCaracter = "d";
(regresaPosicion(miCaracter));

/********************************************************************** */

/* 3. Hacer una función que reciba un precio,
* y este me devuelva el precio con impuesto de `0.19%`.
* Si yo ingreso `1000` a la función, me debería retornar con el formato
* `"El precio con impuesto es de $1190"`
*/

function calcularImpuesto() {
  var tasa = 0.19;
  if (isNaN(precio)) {
    console.log("Error de entrada");
    return -1;
  } else {
    var precioTotal=precio+(precio*tasa);
    console.log("El precio con impuesto es de $" + precioTotal);
  }
  return null;
}

//Un amable mensaje para correrlo desde la consola
console.log("3: Por ejemplo, si precio= 1000, calcularImpuesto(), imprime en la consola: ")


var precio = 1000;
calcularImpuesto();

/********************************************************************** */

/* 4. Hacer un closure con contexto de "una persona tira un dado". Es decir, yo le entrego un nombre, por ejemplo:

    var dadoJulio = nuevoDado('julio')

    Y que la respuesta de dadoJulio() sea:

    dadoJulio() -> "Julio tiró un dado y salió 6"
    dadoJulio() -> "Julio tiró un dado y salió 3"
    dadoJulio() -> "Julio tiró un dado y salió 5"

    Por lo tanto, la respuesta del closure debe ser aleatoria y el dado debe ser de 6 caras (osea del 1 al 6).
*/

function nuevoDado() {

  min = 1;
  max = 7;
  var resultado;

  function resultadoDado() {
    /* Esta propiedad se calcula dentro de la función interna es regresada (return) por la función padre
    * antes de ser ejecutada
    */
    resultado=Math.floor(Math.random() * (max - min) + min); // min es incluyente pero max es excluyente, por eso el 7
    console.log(jugador + " tiró un dado y salió " + resultado);
  }
  return resultadoDado;
}

//Un amable mensaje para correrlo desde la consola
console.log("4: Por ejemplo, si jugador= 'Julio', dadoJugador(), imprime en la consola: ")


var jugador="Julio";
var dadoJugador = nuevoDado();
dadoJugador();

/********************************************************************** */

/* 5. Generar un prototipo llamado `Persona` que va a recibir 2 argumentos (nombre completo y edad).
* El prototipo debe tener un método que sea `guardarEnLocalStorage` y `guardarEnSessionStorage`,
* estos métodos deben guardar nombre completo y edad en el local storage y session storage.
* Al guardar estos elementos, deben visualizarse a través del debugger de chrome o de algún otro browser.
*/

//Prototipo Persona
function Persona(nombreCompleto, edad) {
  this.nombreCompleto = nombreCompleto;
  this.edad = edad;
}

Persona.prototype.guardarEnLocalStorage = function() {
  localStorage.setItem(this.nombreCompleto, this.edad + " años");
}

Persona.prototype.guardarEnSessionStorage = function() {
  sessionStorage.setItem(this.nombreCompleto, this.edad + " años");
}

var padre = new Persona("Domingo Domínguez", 53);
var madre = new Persona("Martica Martínez", 48);

padre.guardarEnLocalStorage();
padre.guardarEnSessionStorage();
madre.guardarEnLocalStorage();
madre.guardarEnSessionStorage();
