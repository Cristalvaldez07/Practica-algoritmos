/* Haga una función grafArr(arr, num, car) a la cual se le pase un arreglo “arr” de “num”
números reales y haga una gráfica usando el carácter “car”. La función debe usar la escala
de 10 caracteres para el máximo y 0 caracteres para el mínimo valor dentro del arreglo. Si el
carácter usado fuese “+”, la apariencia de la salida seria como la siguiente: */

var grafArr = function(arr, num, car) {
    var max = Math.max.apply(null, arr);
    var min = Math.min.apply(null, arr);
    var scale = 10 / (max - min);
    var str = "";
    for (var i = 0; i < num; i++) {
        str += car;
        for (var j = 0; j < scale * (arr[i] - min); j++) {
        str += car;
        }
        str += "\n";
    }
    return str;
    }

    console.log(grafArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, "+"));