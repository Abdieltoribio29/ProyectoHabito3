// Navegación suave
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }
  
  // Carousel
  let currentSlide = 0;
  let autoSlideInterval;
  
  // Actualiza el desplazamiento del carousel
  function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    carousel.style.transform = `translateX(${-currentSlide * 100}%)`;
  }
  
  // Muestra el slide anterior
  function prevSlide() {
    const items = document.querySelectorAll('.carousel-item');
    currentSlide = (currentSlide - 1 + items.length) % items.length;
    updateCarousel();
  }
  
  // Muestra el siguiente slide
  function nextSlide() {
    const items = document.querySelectorAll('.carousel-item');
    currentSlide = (currentSlide + 1) % items.length;
    updateCarousel();
  }
  
  // Inicia el autodesplazamiento
  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      nextSlide();
    }, 3000); // Cambia cada 3 segundos
  }
  
  // Detiene el autodesplazamiento
  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }
  
  // Inicia el autodesplazamiento al cargar la página
  document.addEventListener('DOMContentLoaded', () => {
    updateCarousel();
    startAutoSlide();
  
    // Detener el autodesplazamiento al pasar el mouse sobre el carousel
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.addEventListener('mouseenter', stopAutoSlide);
    carouselContainer.addEventListener('mouseleave', startAutoSlide);
  });  
  
  // Formulario de contacto
  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('formMessage').textContent = '¡Gracias por contactarnos!';
  });

  const video = document.querySelector('video');
video.pause(); // Asegúrate de que esté pausado al cargar la página.

  