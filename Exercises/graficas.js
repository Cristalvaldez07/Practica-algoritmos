/* Usando ciclos, escriba un programa que imprima por HTML los siguientes
gráficos. (Solo soluciones ingeniosas tienen valor) */


const linea = (n, char) => {
    let linea = '';
    for (let i = 0; i < n; i++) {
        linea += char;
    }
    return linea;
}
console.log("Grafica A: ");
let arr1 = [6,5,4,3,2,1];
arr1.map(n => {
    let l = linea(n, '*');
    console.log(l);
});

console.log("Grafica B: ");
let arr2 = [1,3,5, 7,9];
arr2.map(n => {
    let l = linea(n, '*');
    console.log(l);
});

console.log("Grafica C: ");
let arr3 = [1,3,5, 7,9,7,5,3,1];
arr3.map(n => {
    let l = linea(n, '*');
    console.log(l);
});