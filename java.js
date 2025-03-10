let currentIndex = 0;
const slides = document.querySelectorAll('.mySlides');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function changeSlide(step) {
  currentIndex = (currentIndex + step + slides.length) % slides.length;
  showSlide(currentIndex);
}

function goToSlide(index) {
  currentIndex = index - 1;
  showSlide(currentIndex);
}

// Event listeners for external buttons
document.getElementById('prev').addEventListener('click', () => changeSlide(-1));
document.getElementById('next').addEventListener('click', () => changeSlide(1));

// Initialize the first slide
showSlide(currentIndex);
