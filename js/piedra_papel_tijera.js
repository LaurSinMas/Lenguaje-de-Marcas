let partidas = 0;
let ganadas = 0;
let perdidas = 0;
let empatadas = 0;




function jugar(jugador){
    const opciones = ["piedra", "papel", "tijeras"];
    const maquina = opciones[Math.floor(Math.random() * opciones.length)]
let mensaje;

partidas++;

    // Operador lógico AND (&&) y OR (||)
    if (jugador === maquina) {
    mensaje = "Empate";
    empatadas++;
    }

    else if (jugador === "piedra" && maquina === "tijera" || jugador === "papel" && maquina === "piedra" || jugador === "tijera" && maquina === "papel"){
    mensaje = "Has ganado";
    ganadas++;
    }

    else {
    mensaje = "Has perdido";
    perdidas++;
    }

    console.log(mensaje);
}

