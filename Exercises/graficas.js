/* Usando ciclos, escriba un programa que imprima por HTML los siguientes
gráficos. (Solo soluciones ingeniosas tienen valor) */


const linea = (n, char) => {
    let linea = '';
    for (let i = 0; i < n; i++) {
        linea += char;
    }
    return linea;
}

let arr = [6,5,4,3];
arr.map(n => {
    let l = linea(n, '*');
    console.log(l);
});

