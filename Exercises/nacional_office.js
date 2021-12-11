/* La oficina Nacional de Planificación le solicita un programa que haga una tabla de  estimación 
de la población del país para los próximos 10 años. El programa debe solicitar la  población actual,
 las tasas de natalidad y de mortalidad esperadas. Las tasas se expresan  como porcentajes de la población.
  Por ejemplo, si la tasa de natalidad es de un 1.5 %  entonces el número de personas nacidas el año n se
   espera que sea el 1.5 % de la población  del año n-1. */

   var poblacion=0;
   poblacion =parseInt(prompt("Digite el numero de la poblacion actual"));
   var natalidad =0;
   natalidad =parseInt(prompt("Digite el numero de la tasa de natalidad"));
   var mortalidad =0;
   mortalidad =parseInt(prompt("Digite el numero de la tasa de mortalidad"));
   
   natalidad=natalidad/100;
   mortalidad=mortalidad/100;
   mortalidad=mortalidad*10;
   natalidad=natalidad*10;
   poblacion= poblacion-mortalidad;
   poblacion=poblacion+natalidad;
   
   document.write("Poblacion Dentro de 10 años = "+poblacion);
   