let currentIndex = 0;
let intervalId = null;

const images = document.querySelectorAll('.image-to-show');

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

function stopSlideshow() {
    clearInterval(intervalId);
}

document.getElementById('stopButton').addEventListener('click', function() {
    stopSlideshow();
    this.style.display = 'none';
    document.getElementById('resumeButton').style.display = 'inline';
});

document.getElementById('resumeButton').addEventListener('click', function() {
    startSlideshow();
    this.style.display = 'none';
    document.getElementById('stopButton').style.display = 'inline';
});