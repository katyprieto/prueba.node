console.log( Math.random());
console.log( Math.random());
const prompt = require("prompt-sync")({sigint:true});
function test1(x,Y) {return Y-x};

console.log (test1(10,40));

function test2(x,y) {return x*2 
    console.log(x) 
    return x/2};
console.log (test2(10));

let a = parseInt(prompt("numero en pulgadas"));
function pasaje(x) {return x*2.54};

console.log(pasaje(a));

let dominio = prompt('Ingrese el nombre de su pagina:')

const nombreDelSitio = nombre => `http://${nombre}.com.ar`;

console.log(nombreDelSitio(dominio));

let texto = prompt("ingrese frase:");
let comillas = x => `"${x}"`;
console.log(comillas(texto))

let edadperro = prompt( "ingrese la edad de su perro");
let edad = x => x*7;
console.log(edad(edadperro));

let sueldo = prompt("ingrese su sueldo:");
let horadetrabajo =x => x/40
console.log(horadetrabajo(sueldo));

let peso =prompt("ingrese su peso:");
let altura = prompt("ingrese su altura:");
let calculoIMC = (x,y) => x/y;
console.log(calculoIMC(peso,altura));









