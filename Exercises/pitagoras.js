/* Los números de Pitágoras pueden ser descritos de la siguiente manera: a² + b² = c², donde a,
b y c son enteros, b y c son consecutivos, a y b son catetos y c es la hipotenusa. Escriba un
programa para encontrar 5 ternas de números de Pitágoras. Por ejemplo:
(a) 3² + 4² = 5², 5² +12² = 13² */

var a = 0;
var b = 0;
var c = 0;
var contador = 0;

function Pitagoras(a, b, c) {
    if (a * a + b * b == c * c) {
        contador++;
        console.log(a + "² + " + b + "² = " + c + "²");
    }
}

Pitagoras(3, 4, 5, 2, 1);