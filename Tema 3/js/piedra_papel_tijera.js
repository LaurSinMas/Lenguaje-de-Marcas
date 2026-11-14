let partidas = 0;
let ganadas = 0;
let perdidas = 0;
let empatadas = 0;

const opciones = {
  piedra: { nombre: "Piedra", imagen: "img/piedra.png" },
  papel: { nombre: "Papel", imagen: "img/papel.png" },
  tijera: { nombre: "Tijera", imagen: "img/tijera.png" }
};

function jugar(jugador) {
  const jugadas = Object.keys(opciones);
  const maquina = jugadas[Math.floor(Math.random() * jugadas.length)];
  const opcionJugador = opciones[jugador];
  const opcionMaquina = opciones[maquina];
  let mensaje;
  let resultado;

  partidas++;

  if (jugador === maquina) {
    mensaje = `Empate: ambos habéis elegido ${opcionJugador.nombre}.`;
    resultado = "empatada";
    empatadas++;
  } else if (
    (jugador === "piedra" && maquina === "tijera") ||
    (jugador === "papel" && maquina === "piedra") ||
    (jugador === "tijera" && maquina === "papel")
  ) {
    mensaje = "¡Has ganado esta ronda contra la máquina!";
    resultado = "ganada";
    ganadas++;
  } else {
    mensaje = "Has perdido esta ronda contra la máquina.";
    resultado = "perdida";
    perdidas++;
  }

  document.getElementById("marcador").textContent =
    "Partidas jugadas: " + partidas;
  document.getElementById("ganadas").textContent =
    "Partidas ganadas: " + ganadas;
  document.getElementById("perdidas").textContent =
    "Partidas perdidas: " + perdidas;
  document.getElementById("empatadas").textContent =
    "Partidas empatadas: " + empatadas;
  const imagenJugador = document.getElementById("imagen-jugador");
  imagenJugador.src = opcionJugador.imagen;
  imagenJugador.alt = `Has elegido ${opcionJugador.nombre}`;
  imagenJugador.hidden = false;
  document.getElementById("jugada-jugador").textContent = opcionJugador.nombre;
  const imagenMaquina = document.getElementById("imagen-maquina");
  imagenMaquina.src = opcionMaquina.imagen;
  imagenMaquina.alt = `La máquina ha elegido ${opcionMaquina.nombre}`;
  imagenMaquina.hidden = false;
  document.getElementById("jugada-maquina").textContent =
    opcionMaquina.nombre;
  const mensajeRonda = document.getElementById("mensaje");
  mensajeRonda.textContent = mensaje;
  mensajeRonda.dataset.resultado = resultado;
}
