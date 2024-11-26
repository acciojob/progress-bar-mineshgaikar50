//your JS code here. If required.
// script.js
const circles = document.querySelectorAll('.circle');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentActive = 0;

nextButton.addEventListener('click', () => {
    if (currentActive < circles.length - 1) {
        currentActive++;
        updateCircles();
    }
});

prevButton.addEventListener('click', () => {
    if (currentActive > 0) {
        currentActive--;
        updateCircles();
    }
});

function updateCircles() {
    // Add active class to circles
    circles.forEach((circle, index) => {
        if (index <= currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    // Enable/Disable buttons
    prevButton.disabled = currentActive === 0;
    nextButton.disabled = currentActive === circles.length - 1;
}
