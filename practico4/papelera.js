

const readlineSync = require('readline-sync');
let jugadaUsuario = readlineSync.question("Escriba su jugada: piedra, papel o tijera = ");
if (jugadaUsuario !== "piedra" && jugadaUsuario !== "papel" && jugadaUsuario !== "tijera"){
    console.log ("opción no valida, ingrese su jugada nuevamente");
    return
}
console.log('Su eleccion fue: %s', jugadaUsuario);



if (jugadaCPU === 0){
    console.log ("piedra");
  }else if (jugadaCPU === 1){
    console.log ("papel");
  }else if (jugadaCPU === 2){
    console.log ("tijera");
  }
