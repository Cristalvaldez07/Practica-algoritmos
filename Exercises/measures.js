/* Haga un programa al cual se le digite una longitud expresada en pulgadas e imprima por  
consola la misma longitud en yardas, pies y pulgadas. Por ejemplo, una longitud de 65 
 pulgadas sería expresada como: 1 yarda, 2 pies y 5 pulgadas. */

var pulgadas = 65;
var yardas = pulgadas / 36;
var pies = pulgadas / 12;
var pulgadas = pulgadas % 12;
console.log(yardas);
console.log(pies);
console.log(pulgadas);

