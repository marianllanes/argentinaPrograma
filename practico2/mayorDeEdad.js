const readlineSync = require('readline-sync');
let edad = readlineSync.question("Ingresa tu edad");
console.log("Elnúmero ingresado es: %i", edad);

if (edad >= 18) {
    console.log ("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}


