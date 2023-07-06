const readlineSync = require('readline-sync');


function obtenerJugadaComputadora(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const jugadasPosibles = ["piedra", "papel", "tijera"];
const piedra = jugadasPosibles[0];
const papel = jugadasPosibles[1];
const tijera = jugadasPosibles[2];
const numeroRandom = obtenerJugadaComputadora(0, 2);
const jugadaCPU = jugadasPosibles[numeroRandom];
console.log("Computadora eligiendo su jugada.");

function obtenerJugadaUsuario(){
  return readlineSync.question("Escriba su jugada: piedra, papel o tijera = ");
}

const jugadaUsuario = obtenerJugadaUsuario();
if (jugadaUsuario !== piedra && jugadaUsuario !== papel && jugadaUsuario !== tijera) {
  console.log("opción no valida, ingrese su jugada nuevamente");
  return
}
console.log('Su eleccion fue: %s', jugadaUsuario);


function determinarGanador(jugadaCPU, jugadaUsuario) {
  if (jugadaCPU === jugadaUsuario) {
    return "Empate! Vuelve a intentarlo";
  }
  else if (jugadaCPU === piedra && jugadaUsuario === tijera) {
    return "Perdiste! Gana la Computadora";
  }
  else if (jugadaCPU === tijera && jugadaUsuario === piedra) {
    return "Ganaste! Congratulaciones";
  }
  else if (jugadaCPU === piedra && jugadaUsuario === papel) {
    return"Ganaste! Felicitaciones";
  }
  else if (jugadaCPU === papel && jugadaUsuario === piedra) {
    return "Perdiste! Gana la Computadora";
  }


}

let resultado = determinarGanador(jugadaCPU, jugadaUsuario);

console.log(`La computadora eligio: ${jugadaCPU}. El usuario eligio: ${jugadaUsuario}. El resultado fue: ${resultado}.`);