/* Haga una función cdig(), cuyo prototipo es:
var cdig = function(cantidad, dígito){ //código aquí}
Se desea que dicha función retorne las veces que el dígito d este contenido en el número n.
Por ejemplo, cdgi(1241, 1) = 2 veces aparece el dígito 1 en la cantidad 1241. */

var cdig = function(cantidad, digito){
    var contador = 0;
    for(var i = 0; i < cantidad.length; i++){
        if(cantidad[i] == digito){
            contador++;
        }
    }
    return contador;
}

cdig (1241, 1);



