let currentIndex = 1;
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;
const slideWidth = slides[0].clientWidth;

function showSlide(index) {
    currentIndex = index;
    const offset = -currentIndex * slideWidth;
    document.querySelector('.carousel-slide').style.transform = `translateX(${offset}px)`;

    // If it's the last slide (clone of the first), reset to the real first slide
    if (currentIndex === totalSlides - 1) {
        setTimeout(() => {
            document.querySelector('.carousel-slide').style.transition = 'none';
            document.querySelector('.carousel-slide').style.transform = `translateX(-${slideWidth}px)`;
            setTimeout(() => {
                document.querySelector('.carousel-slide').style.transition = 'transform 0.5s ease-in-out';
            }, 50);
        }, 500);
    }
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

// Automatically switch slides every 3 seconds
setInterval(nextSlide, 3000);

