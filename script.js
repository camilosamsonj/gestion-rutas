// Array para almacenar las rutas de entrega
let rutas = [];

// Función para agregar una nueva ruta
function agregarRuta() {
    const inputRuta = document.getElementById('ruta');
    const ruta = inputRuta.value.trim();

    if (ruta === "") {
        alert("Por favor, ingresa una ruta válida.");
        return;
    }   

    // Agregar la ruta al array
    rutas.push(ruta);

    // Limpiar el input
    inputRuta.value = "";

    // Actualizar la lista de rutas
    actualizarListaRutas();
}
 
// Función para actualizar la lista de rutas en pantalla
function actualizarListaRutas() {
    const listaRutas = document.getElementById('lista-rutas');
    listaRutas.innerHTML = ""; // Limpiar la lista actual

    // Recorrer el array de rutas y mostrarlas en la lista
    rutas.forEach((ruta, index) => {
        const li = document.createElement('li');
        li.textContent = ruta;

        // Botón para eliminar la ruta
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = "Eliminar";
        btnEliminar.classList.add('eliminar');
        btnEliminar.onclick = () => eliminarRuta(index);

        li.appendChild(btnEliminar);
        listaRutas.appendChild(li);
    });
}

// Función para eliminar una ruta
function eliminarRuta(index) {
    rutas.splice(index, 1); // Eliminar la ruta del array
    actualizarListaRutas(); // Actualizar la lista en pantalla
}
