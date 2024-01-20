alert('Bienvenida y bienvenido a nuestro sitio web');

let nombre = "Luna";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponivle = 1000;

alert('ERROR completa todos los campos');

let mensajeDeError = 'ERROR completa todos los campos';
alert(mensajeDeError);//muestra una alerta donde el parametro es una variable

console.log("Hola mundo");

nombre = prompt("Ingrese su usuario");
edad = prompt("Ingrese su edad");

if (edad >= 18) {
    alert('Puedes obtener tu licencia de conducir');
}