/* Un diagrama que permita leer n numeros e indique cuanto estan entre 200 y 5000, cuantos son mayores de 100
y cuantos son menos de 30 e imprima el resultado */

var numero = 0;
for (var i = 0; i < 5; i++) {
  numero = parseInt(prompt("Ingrese un numero"));
  if (numero >= 200 && numero <= 5000) {
    console.log("El numero " + numero + " esta entre 200 y 5000");
  } else if (numero > 100) {
    console.log("El numero " + numero + " es mayor a 100");
  } else if (numero < 30) {
    console.log("El numero " + numero + " es menor a 30");
  }
}

