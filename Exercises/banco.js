/* Haga un programa al cual se le digite el monto a ahorrar, la tasa de
interés, los meses de ahorro y que imprima por consola el monto al final del ahorro. */


  const interes = 4;
  const capital = 500;
  const meses = 2;
  let result = capital;

  function calcularInteres(interes, capital, meses){
    for (let i = 0; i < meses; ++i){

result += result * ( interes / 100) ;
}
 return result;

  }


console.log(calcularInteres(interes, capital, meses));