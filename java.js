let currentIndex = 0;
const slides = document.querySelectorAll('.mySlides');
const dots = document.querySelectorAll('.dot');

// Mostrar la diapositiva actual
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

// Cambiar diapositiva con botones
function changeSlide(step) {
  currentIndex = (currentIndex + step + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Ir a una diapositiva específica
function goToSlide(index) {
  currentIndex = index - 1;
  showSlide(currentIndex);
}

// Avanzar automáticamente
setInterval(() => {
  changeSlide(1); // Moverse a la siguiente diapositiva
}, 4000); // Cambia cada 4000 ms (4 segundos)

// Event listeners para los botones de navegación
document.getElementById('prev').addEventListener('click', () => changeSlide(-1));
document.getElementById('next').addEventListener('click', () => changeSlide(1));

// Inicializar la primera diapositiva
showSlide(currentIndex);
