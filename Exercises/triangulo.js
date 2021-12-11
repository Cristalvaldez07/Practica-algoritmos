/* Se hace un triángulo con latas de leche condensadas, de la siguiente manera: 1 lata en el
tope, 3 en el siguiente, 5 en el siguiente etc. Realice una función para cada uno de los puntos
siguientes:
(a) ¿Cuántos niveles se tiene con n latas?
(b) ¿Cuántas latas sobran haciendo el triángulo si se tienen n latas (con 13 latas se tienen 3
niveles y sobran 4)? */ 

var n = prompt("Ingrese el número de latas");
var niveles = 0;
var sobrantes = 0;
function triangulo(n) {
    for(var i = 1; i <= n; i++) {
        niveles += i;
    }
    sobrantes = n - niveles;
    console.log("El triángulo tiene " + niveles + " niveles y " + sobrantes + " latas sobrantes");
}
triangulo(n);