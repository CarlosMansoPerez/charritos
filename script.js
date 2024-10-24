document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const body = document.getElementById('body');
    const closeButton = document.getElementById('close-button');

    // Función para mostrar el modal
    function showModal() {
            modal.style.display = 'block';
            body.style.overflow = 'hidden';
            modal.style.overflowX = "hidden";
    }

    // Espera 10 segundos antes de mostrar el modal
    setTimeout(showModal, 1000);

    // Función para cerrar el modal
    function closeModal() {
        modal.style.display = 'none';
        body.style.overflow = 'auto';

    }

    // Evento para el botón de cerrar
    closeButton.addEventListener('click', closeModal);

    // Cerrar el modal si el usuario hace clic fuera de él
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            closeModal();
        }
    });
});