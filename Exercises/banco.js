/* Haga un programa al cual se le digite el monto a ahorrar, la tasa de
interés, los meses de ahorro y que imprima por consola el monto al final del ahorro. */

var monto = prompt("Ingrese el monto a ahorrar");
var tasa = prompt("Ingrese la tasa de interés");
var meses = prompt("Ingrese los meses de ahorro");
console.log("El monto al final del ahorro es: " + (monto * Math.pow(1 + tasa / 100, meses)));