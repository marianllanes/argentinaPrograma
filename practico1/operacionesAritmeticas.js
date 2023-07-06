let var1 = 2, var2 = 2, var3 = 4, var4 = 15;
let suma = var1 + var2;
let resta = var4 - var3;
let resultadoFinal = suma*resta;
let esPar;
if ((resultadoFinal % 2) === 0) {
   esPar= true;
}

console.log("Mis variables iniciales fueron: ", var1, var2, var3, "y", var4, "La respuesta a verificar si el resultado final es par es: ", esPar);