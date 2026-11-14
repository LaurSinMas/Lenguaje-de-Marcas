const pantalla = document.querySelector("#pantalla");
const teclado = document.querySelector(".teclado");

let entradaActual = "0";
let operandoAnterior = null;
let operadorPendiente = null;
let reiniciarEntrada = false;
let ultimoOperador = null;
let ultimoOperando = null;

function actualizarPantalla() {
    pantalla.value = entradaActual;
}

function formatearResultado(valor) {
    if (!Number.isFinite(valor)) {
        return null;
    }

    return String(Number(valor.toPrecision(12)));
}

function calcularOperacion(izquierdo, derecho, operador) {
    let resultado;

    switch (operador) {
        case "+":
            resultado = izquierdo + derecho;
            break;
        case "-":
            resultado = izquierdo - derecho;
            break;
        case "*":
            resultado = izquierdo * derecho;
            break;
        case "/":
            if (derecho === 0) {
                return null;
            }
            resultado = izquierdo / derecho;
            break;
        default:
            return null;
    }

    return formatearResultado(resultado);
}

function mostrarError() {
    entradaActual = "Error";
    operandoAnterior = null;
    operadorPendiente = null;
    reiniciarEntrada = true;
    ultimoOperador = null;
    ultimoOperando = null;
    actualizarPantalla();
}

function limpiarTodo() {
    entradaActual = "0";
    operandoAnterior = null;
    operadorPendiente = null;
    reiniciarEntrada = false;
    ultimoOperador = null;
    ultimoOperando = null;
    actualizarPantalla();
}

function limpiarEntrada() {
    entradaActual = "0";
    reiniciarEntrada = false;
    ultimoOperador = null;
    ultimoOperando = null;
    actualizarPantalla();
}

function agregarDigito(digito) {
    if (entradaActual === "Error") {
        limpiarTodo();
    }

    if (reiniciarEntrada) {
        entradaActual = digito;
        reiniciarEntrada = false;
    } else if (entradaActual === "0") {
        entradaActual = digito;
    } else if (entradaActual.length < 16) {
        entradaActual += digito;
    }

    ultimoOperador = null;
    ultimoOperando = null;
    actualizarPantalla();
}

function agregarDecimal() {
    if (entradaActual === "Error") {
        limpiarTodo();
    }

    if (reiniciarEntrada) {
        entradaActual = "0.";
        reiniciarEntrada = false;
    } else if (!entradaActual.includes(".")) {
        entradaActual += ".";
    }

    ultimoOperador = null;
    ultimoOperando = null;
    actualizarPantalla();
}

function seleccionarOperador(operador) {
    if (entradaActual === "Error") {
        return;
    }

    const valorActual = Number(entradaActual);

    if (operadorPendiente && !reiniciarEntrada) {
        const resultado = calcularOperacion(operandoAnterior, valorActual, operadorPendiente);
        if (resultado === null) {
            mostrarError();
            return;
        }

        entradaActual = resultado;
        operandoAnterior = Number(resultado);
    } else {
        operandoAnterior = valorActual;
    }

    operadorPendiente = operador;
    reiniciarEntrada = true;
    ultimoOperador = null;
    ultimoOperando = null;
    actualizarPantalla();
}

function aplicarPorcentaje() {
    if (entradaActual === "Error") {
        return;
    }

    const resultado = formatearResultado(Number(entradaActual) / 100);
    if (resultado === null) {
        mostrarError();
        return;
    }

    entradaActual = resultado;
    reiniciarEntrada = false;
    ultimoOperador = null;
    ultimoOperando = null;
    actualizarPantalla();
}

function borrarUltimoDigito() {
    if (entradaActual === "Error") {
        limpiarEntrada();
        return;
    }

    if (reiniciarEntrada && operadorPendiente) {
        return;
    }

    const nuevaEntrada = entradaActual.slice(0, -1);
    entradaActual = !nuevaEntrada || nuevaEntrada === "-" ? "0" : nuevaEntrada;
    reiniciarEntrada = false;
    ultimoOperador = null;
    ultimoOperando = null;
    actualizarPantalla();
}

function mostrarResultado() {
    if (entradaActual === "Error") {
        return;
    }

    if (operadorPendiente) {
        const operador = operadorPendiente;
        const operando = reiniciarEntrada ? operandoAnterior : Number(entradaActual);
        const resultado = calcularOperacion(operandoAnterior, operando, operador);
        if (resultado === null) {
            mostrarError();
            return;
        }

        entradaActual = resultado;
        ultimoOperador = operador;
        ultimoOperando = operando;
        operandoAnterior = null;
        operadorPendiente = null;
        reiniciarEntrada = true;
    } else if (ultimoOperador && ultimoOperando !== null) {
        const resultado = calcularOperacion(Number(entradaActual), ultimoOperando, ultimoOperador);
        if (resultado === null) {
            mostrarError();
            return;
        }

        entradaActual = resultado;
        reiniciarEntrada = true;
    }

    actualizarPantalla();
}

teclado.addEventListener("click", (evento) => {
    const boton = evento.target.closest("button");
    if (!boton) {
        return;
    }

    if (boton.dataset.digit !== undefined) {
        agregarDigito(boton.dataset.digit);
        return;
    }

    if (boton.dataset.operator) {
        seleccionarOperador(boton.dataset.operator);
        return;
    }

    switch (boton.dataset.action) {
        case "percent":
            aplicarPorcentaje();
            break;
        case "clear-entry":
            limpiarEntrada();
            break;
        case "clear":
            limpiarTodo();
            break;
        case "backspace":
            borrarUltimoDigito();
            break;
        case "decimal":
            agregarDecimal();
            break;
        case "equals":
            mostrarResultado();
            break;
    }
});
