function addActivity() {
    const activityInput = document.getElementById("activityInput");
    const quadrantSelect = document.getElementById("quadrantSelect");
    const activity = activityInput.value;
    const quadrant = quadrantSelect.value;

    if (activity === "") {
        alert("Por favor, ingresa una actividad.");
        return;
    }

    const listId = "list" + quadrant;
    const list = document.getElementById(listId);
    const listItem = document.createElement("li");
    listItem.textContent = activity;

    // Añade el elemento a la lista del cuadrante seleccionado
    list.appendChild(listItem);

    // Limpia el campo de entrada de actividad
    activityInput.value = "";
}
