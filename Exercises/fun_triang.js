/* Haga una función tripoTriang(a, b, c) a la cual se le pase como parámetros las longitudes de
los lados y retorne 1, 2 o 3 según el triángulo sea equilátero, isósceles o escaleno */

var tripoTriang = function(a, b, c) {
    if (a === b && b === c) {
        return 1;
    } else if (a === b || b === c || a === c) {
        return 2;
    } else {
        return 3;
    }
    }

    console.log(tripoTriang(2, 2, 2));