let partidas = 0;
let ganadas = 0;
let perdidas = 0;
let empatadas = 0;

function jugar(jugador) {
  const opciones = ["piedra", "papel", "tijera"];
  const maquina = opciones[Math.floor(Math.random() * opciones.length)];
  let mensaje;

  partidas++;

  // Operador lógico AND (&&) y OR (||)
  if (jugador === maquina) {
    mensaje = "Empate";
    empatadas++;
  } else if (
    (jugador === "piedra" && maquina === "tijera") ||
    (jugador === "papel" && maquina === "piedra") ||
    (jugador === "tijera" && maquina === "papel")
  ) {
    mensaje = "Has ganado";
    ganadas++;
  } else {
    mensaje = "Has perdido";
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
  document.getElementById("jugada-jugador").textContent =
    "Tu jugada: " +
    jugador +
    ", Jugada de la máquina: " +
    maquina +
    ". " +
    mensaje;
  document.getElementById("jugada-maquina").textContent =
    "Jugada de la máquina: " + maquina;
  document.getElementById("mensaje").textContent = mensaje;
}
