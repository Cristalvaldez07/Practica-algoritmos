/*  Escriba un programa que lea dos números positivos (debes controlar que solo ingresen  positivos,
     si ingresan negativos debes dar un alert de error) y muestre por consola el  resultado de multiplicarlos 
     por sumas repetidas. */

     var num1 = parseInt(prompt("Ingrese el primer número"));
        var num2 = parseInt(prompt("Ingrese el segundo número"));
        if (num1 < 0 || num2 < 0) {
            alert("Ingrese un número positivo");
        }
        else {
            console.log("El resultado de multiplicar " + num1 + " por " + num2 + " es: " + num1 * num2);
        }
