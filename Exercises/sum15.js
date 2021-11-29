/* Escriba un programa al cual se le digiten diez valores y al final imprima por pantalla la suma
de los valores, las sumas de los cuadrados, el promedio, el máximo y el mínimo. */

var suma = 0;
var sumaCuadrados = 0;
var promedio = 0;
var max = 0;
var min = 0;

if (suma < 0) {
    console.log("Error");
} else {
    for (var i = 0; i < 10; i++) {
        var valor = parseInt(prompt("Ingrese un valor"));
        suma = suma + valor;
        sumaCuadrados = sumaCuadrados + (valor * valor);
        if (valor > max) {
            max = valor;
        }
        if (i == 0) {
            min = valor;
        } else if (valor < min) {
            min = valor;
        }
    }
    promedio = suma / 10;
    console.log("La suma de los valores es: " + suma);
    console.log("La suma de los cuadrados es: " + sumaCuadrados);
    console.log("El promedio es: " + promedio);
    console.log("El máximo es: " + max);
    console.log("El mínimo es: " + min);
}