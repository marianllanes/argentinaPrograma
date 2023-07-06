const readlineSync = require('readline-sync');
let var1 = readlineSync.question("Ingrese cualquier número entero: ");
console.log('El número elejido fue: %i', var1);

if (var1 > 0 && var1 %2 ===0){
    console.log ("El número es positivo y par");
} 
    else if (var1 > 0 && var1 %2 !==0){
        console.log("El número es positivo y impar");
    }
        else if (var1 < 0){
            console.log("EL número es negativo");
        }
            else (var1 ===0);{
                console.log ("El número es cero");
            }
