document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.querySelector('#projectCarousel');
    var carouselInstance = new bootstrap.Carousel(carousel, {
        interval: 3000,
        wrap: true
    });

    // Detener el carrusel cuando el cursor esté sobre la imagen
    carousel.addEventListener('mouseenter', function () {
        carouselInstance.pause();
    });

    // Reiniciar el carrusel cuando el cursor salga de la imagen
    carousel.addEventListener('mouseleave', function () {
        carouselInstance.cycle();
    });
});
