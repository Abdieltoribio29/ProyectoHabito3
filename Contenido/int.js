document.getElementById("toggleInfoBtn").addEventListener("click", function () {
    const extraInfo = document.getElementById("extraInfo");
    if (extraInfo.classList.contains("hidden")) {
        extraInfo.classList.remove("hidden");
        this.textContent = "Ocultar Información Adicional";
    } else {
        extraInfo.classList.add("hidden");
        this.textContent = "Mostrar Información Adicional";
    }
});
