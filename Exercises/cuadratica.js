/*Haga una función eqcuad(a, b, c) la cual retorne la solución positiva de una ecuación cuadrática 
cuyos parámetros son a, b y c respectivamente. */

var eqcuad = function(a, b, c) {
    let x = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    let y = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    return x;
}

console.log(eqcuad(1, -5, 6));