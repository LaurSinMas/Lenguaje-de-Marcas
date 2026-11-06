//let mensaje = "Esta página dice\n\nHola, mundo!\nQué fácil es poner 'comillas simples'\ny \"comillas dobles\"\n";

/*
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
alert(meses[0]);
alert(meses[1]);
*/

/*
var valores = [true, 5, false, "hola", "adios", 2];

if(valores[3] > valores[4]) {
    alert(valores[3] + " es mayor que " + valores[4]);
}

console.log(!valores[0]);
console.log(!valores[2]);

let suma = 5 + 2;
let resta = 5 - 2;
let multiplicacion = 5 * 2;
let division = 5 / 2;
let modulo = 5 % 2;
*/
/*
var numero1 = 5;
var numero2 = 8;

if(numero1 < numero2) {
    alert("numero1 no es mayor que numero2");
}

if(numero2 > 0) {
    alert("numero2 es positivo");
}

if(numero1 < 0 || numero1 != 0) {
    alert("numero1 es negativo o distinto de cero");
}

if(++numero1 < numero2) {
    alert("numero1 es menor que numero2 después de incrementar");
}
*/
let n = 4;
let resultado = 1;


function numFact() {
        for(let i = n; i > 0; i--) {
        resultado *= i;
        i--
    } 
    return resultado;
}
console.log(numFact());

var producto = 20;

var impuestos = 1.21;
var gastosEnvios = 10;
var precioTotal;

precioTotal = (producto * impuestos) + gastosEnvios;
console.log(precioTotal);