document.getElementById('event-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Captura los valores del formulario
    const title = document.getElementById('event-title').value;
    const date = document.getElementById('event-date').value;

    // Valida que los campos no estén vacíos
    if (title === '' || date === '') {
        alert('Por favor completa todos los campos');
        return;
    }

    // Crea un nuevo evento
    const eventItem = document.createElement('div');
    eventItem.innerHTML = `<strong>${title}</strong> - ${date} <button class="delete">Eliminar</button>`;

    // Añade el evento a la lista
    document.getElementById('events-list').appendChild(eventItem);

    // Elimina el evento
    eventItem.querySelector('.delete').addEventListener('click', function() {
        eventItem.remove();
    });

    // Limpia el formulario
    document.getElementById('event-form').reset();
});
