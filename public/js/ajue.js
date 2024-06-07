// Obtén el botón y la ventana modal
const openModalButton = document.getElementById('openModalButton');
const modal = document.getElementById('modal');

// Agrega un evento de clic al botón para abrir la ventana modal
openModalButton.addEventListener('click', function() {
  modal.style.display = 'block';
});

// Agrega un evento de clic al botón de cierre para cerrar la ventana modal
document.querySelector('.close').addEventListener('click', function() {
  modal.style.display = 'none';
});

// Cierra la ventana modal si el usuario hace clic fuera de ella
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});
