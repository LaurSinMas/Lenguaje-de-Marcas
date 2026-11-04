alert("Este JS se ejecuta perfectamente");

function cambiarModo() {
    
    const enlace = document.getElementById("tema-oscuro");
    enlace.disabled = !enlace.disabled;
}