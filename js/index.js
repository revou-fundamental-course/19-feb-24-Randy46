let currentIndex = 0;
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slider-item');
let intervalId; // Variable to store interval ID

document.addEventListener("DOMContentLoaded", function () {
    currentIndex = 0; // Reset currentIndex

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    intervalId = setInterval(nextSlide, 3000); // Assign interval ID to variable

    // Pause interval on slider hover
    slider.addEventListener('mouseenter', function () {
        clearInterval(intervalId);
    });

    // Resume interval on slider mouse leave
    slider.addEventListener('mouseleave', function () {
        intervalId = setInterval(nextSlide, 3000);
    });

    showSlide(currentIndex);
});


//beda
document.addEventListener("DOMContentLoaded", function () {
    const animatedSection = document.querySelector('.animated-section');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        if (isInViewport(animatedSection)) {
            animatedSection.classList.add('in-view');
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on page load
});

