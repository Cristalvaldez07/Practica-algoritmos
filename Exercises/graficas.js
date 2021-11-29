
const linea = (n, espacios, char) => {
    let linea = '';
    for (let i = 0; i < n; i++) {
        linea += char;
    }
    return linea;
}

console.log(linea(10, 10, '*'));