function myFunction() {
    var x = document.querySelector(".main-nav");
    if (x.classList.contains("responsive")) {
        x.classList.remove("responsive");
    } else {
        x.classList.add("responsive");
    }

    // Adjust the layout of li elements in column mode
    var navList = document.querySelector(".nav-list");
    var liElements = navList.querySelectorAll("li");

    if (x.classList.contains("responsive")) {
        // If responsive class is active, set li elements to display block
        liElements.forEach(function (li) {
            li.style.display = "block";
        });
    } else {
        // If responsive class is not active, reset li elements display property
        liElements.forEach(function (li) {
            li.style.display = "";
        });
    }
}


// slider
let currentIndex = 0;
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slider-item');
let intervalId;

document.addEventListener("DOMContentLoaded", function () {
    currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    intervalId = setInterval(nextSlide, 3000);


    slider.addEventListener('mouseenter', function () {
        clearInterval(intervalId);
    });


    slider.addEventListener('mouseleave', function () {
        intervalId = setInterval(nextSlide, 3000);
    });

    showSlide(currentIndex);
});

//vision
document.addEventListener("DOMContentLoaded", function () {
    const vision = document.querySelector('.vision');

    function isInViewport(element) {
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        if (isInViewport(vision)) {
            vision.classList.add('in-view');
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
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
    handleScroll();
});


function showMessage() {
    const notifDatabase = document.querySelector('.notif-database'); // Tambah titik (.)
    const imgServer = document.querySelector('.graph-index img'); // Sesuaikan pemilihan elemen
    imgServer.style.display = 'none';
    notifDatabase.style.display = 'flex'; // Ganti block dengan flex
}


function tampilkanHasil() {
    var userName = document.getElementById('userName').value;
    var tanggal = document.getElementById('tanggal').value;
    var jenisKelamin = document.getElementById('jenisKelamin').value;
    var pesan = document.getElementById('pesan').value;

    var hasilOutput = `
        <p><strong>User Name:</strong> ${userName}</p>
        <p><strong>Tanggal:</strong> ${tanggal}</p>
        <p><strong>Jenis Kelamin:</strong> ${jenisKelamin}</p>
        <p><strong>Pesan:</strong> ${pesan}</p>
    `;

    document.getElementById('hasilOutput').innerHTML = hasilOutput;
}
