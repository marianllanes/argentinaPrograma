

function obtenerJugadaComputadora(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let cpuArray = ["piedra", "papel", "tijera"]
let jugadaCPU = obtenerJugadaComputadora(0,2);
console.log ("La computadora elijió %s ", cpuArray[jugadaCPU]);


const readlineSync = require('readline-sync');
let jugadaUsuario = readlineSync.question("Escriba su jugada: piedra, papel o tijera = ");
if (jugadaUsuario !== "piedra" && jugadaUsuario !== "papel" && jugadaUsuario !== "tijera"){
    console.log ("opción no valida, ingrese su jugada nuevamente");
    return
}
console.log('Su eleccion fue: %s', jugadaUsuario);


function determinarGanador(jugadaCPU, jugadaUsuario){
  if (jugadaCPU == "Piedra" && jugadaUsuario == "Tijera") {
    console.log("Gana la CPU!");
  }
  else if (jugadaCPU == "Tijera" && jugadaUsuario == "Piedra") {
    console.log("Gana Player 1!");
  }
  else if (jugadaCPU == "Piedra" && jugadaUsuario == "Papel") {
    console.log("Gana Player 1!");
  }
  else if (jugadaCPU == "Papel" && jugadaUsuario == "Piedra") {
    console.log("Gana la CPU!");
  }
  else if (jugadaCPU == "Tijera" && jugadaUsuario == "Tijera") {
    console.log("Es un empate!");
  }
  else if (jugadaCPU == "Papel" && jugadaUsuario == "Papel") {
    console.log("Es un empate!");
  }

}
console.log (determinarGanador(jugadaCPU, jugadaUsuario));
