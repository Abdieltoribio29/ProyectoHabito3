const mensajes = [
    "Pon primero lo primero, y lo segundo caerá en su lugar.",
    "La clave del éxito está en priorizar lo importante, no lo urgente.",
    "El hábito 3 es sobre enfocarse en lo que realmente importa.",
    "No permitas que lo urgente te robe tiempo de lo importante.",
    "Al poner primero lo primero, estás eligiendo la mejor versión de ti mismo.",
    "La planificación hoy, es la tranquilidad del mañana.",
    "Haz de las prioridades tus principales guías en la vida.",
    "Si controlas tu tiempo, controlarás tu vida.",
    "Recuerda que cada elección define tus prioridades.",
    "Priorizar es un acto de amor propio."
];

document.getElementById("generarMensajeBtn").addEventListener("click", function() {
    const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
    const mensajeElemento = document.getElementById("mensajeMotivador");
    
    mensajeElemento.classList.remove("fade-in"); // Reinicia animación
    void mensajeElemento.offsetWidth; // Forzar reflow para reiniciar animación
    mensajeElemento.classList.add("fade-in");

    mensajeElemento.textContent = mensajeAleatorio;
});
