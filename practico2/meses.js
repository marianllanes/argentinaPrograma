const readlineSync = require('readline-sync');
let var1 = readlineSync.question("Ingrese un número del 1 al 12");
console.log('El número elejido fue: %i', var1);

let mes= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
                 "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let cantidadDeDias= [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

console.log("La cantidad de dias del mes de %s es %i", mes[var1 - 1], cantidadDeDias[var1 - 1]);


