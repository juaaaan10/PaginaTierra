// Mostrar mensaje de bienvenida
alert('¡Bienvenido/a al sitio del Día de la Tierra!');

// Mostrar información extra al hacer clic
document.addEventListener('DOMContentLoaded', function() {
    const infoBtn = document.getElementById('info-btn');
    if (infoBtn) {
        infoBtn.addEventListener('click', function() {
            const extraInfo = document.getElementById('info-extra');
            extraInfo.style.display = extraInfo.style.display === 'none' ? 'block' : 'none';
        });
    }

    // Validar formulario
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            const nombre = document.getElementById('nombre').value.trim();
            const correo = document.getElementById('correo').value.trim();
            if (nombre === '' || correo === '') {
                alert('Por favor, complete todos los campos.');
                event.preventDefault();
            }
        });
    }
});
