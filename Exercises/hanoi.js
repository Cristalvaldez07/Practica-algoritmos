/* Torres de Hanoi. Diseña un algoritmo en JavaScript que resuelva el problema con 3
discos. Te dan un conjunto de tres varillas y n discos, con cada disco de un tamaño diferente.
Llamemos a las varillas A, B y C, y numeremos los discos desde 1, el disco más pequeño, hasta
n, el disco más grande. Al principio, todos los n discos están en la varilla A, en orden de
tamaño decreciente de la parte inferior a la parte superior, de modo que el disco n está en la
parte inferior y el disco 1 está en la parte superior. Aquí está cómo se ven las Torres de Hanoi
para n = 5 discos: */

var hanoi = function(n, from, to, aux) {
    if (n === 1) {
        console.log('Mover disco de ' + from + ' a ' + to);
    } else {
        hanoi(n - 1, from, aux, to);
        console.log('Mover disco de ' + from + ' a ' + to);
        hanoi(n - 1, aux, to, from);
    }
    };

    hanoi(5, 'A', 'C', 'B');
