const readlineSync = require('readline-sync');
let num = readlineSync.question("Ingrese un número");
console.log("El número ingresado es %i", num);
if (num > 0){
    console.log("El número es positivo");
}
else if(num === 0){
    console.log("El número es cero");
} 
else {
     console.log("El número es negativo");
}